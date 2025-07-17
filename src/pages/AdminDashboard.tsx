import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, Edit, Download, Upload, MessageCircle, Search, Filter, LogOut, Shield, 
  User, Settings, UserPlus, UserMinus, FileText, Calendar, TrendingUp,
  Phone, Mail, MapPin, Package, Ruler, Palette
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  getQuoteRequests, 
  getAdminUsers, 
  updateQuoteStatus, 
  deleteQuoteRequest,
  addAdminUser,
  deleteAdminUser,
  initializeDefaultAdmin
} from '../lib/firebaseService';

interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  width: string;
  height: string;
  numberOfCurtains: string;
  fabricType: string;
  lace: string;
  lining: string;
  rooms: string;
  address: string;
  notes: string;
  status: string;
  date: string;
  timestamp: string;
}

interface AdminUser {
  id: string;
  username: string;
  role: 'main' | 'admin';
  createdAt: string;
  lastLogin: string;
}

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('quotes');
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [newAdminUsername, setNewAdminUsername] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'firebase' | 'localStorage'>('firebase');
  const [error, setError] = useState('');

  // Load data from Firebase
  useEffect(() => {
    const loadData = async () => {
      const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
      const loginTime = sessionStorage.getItem('adminLoginTime');
      const username = sessionStorage.getItem('adminUsername') || 'admin';
      
      if (!isAuthenticated || !loginTime) {
        navigate('/admin-login');
        return;
      }
  
      // Check if session is older than 8 hours
      const eightHours = 8 * 60 * 60 * 1000;
      if (Date.now() - parseInt(loginTime) > eightHours) {
        sessionStorage.removeItem('adminAuthenticated');
        sessionStorage.removeItem('adminLoginTime');
        sessionStorage.removeItem('adminUsername');
        navigate('/admin-login');
        return;
      }
  
      try {
        setLoading(true);
        setError('');
        
        // Initialize default admin
        await initializeDefaultAdmin();
        
        // Load quote requests from Firebase
        const quotes = await getQuoteRequests();
        setQuoteRequests(quotes);
        
        // Load admin users from Firebase
        const admins = await getAdminUsers();
        setAdminUsers(admins);
        
        // Set current user
        const user = admins.find(admin => admin.username === username);
        setCurrentUser(user || admins[0]);
        
        setDataSource('firebase');
        
      } catch (error) {
        console.error('Error loading data from Firebase:', error);
        setError('Failed to load data from Firebase, using local storage as fallback');
        
        // Fallback to localStorage
        const savedQuotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
        setQuoteRequests(savedQuotes);
        
        const savedAdmins = JSON.parse(localStorage.getItem('adminUsers') || '[]');
        if (savedAdmins.length === 0) {
          const mainAdmin = {
            id: '1',
            username: 'admin',
            role: 'main' as const,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
          };
          savedAdmins.push(mainAdmin);
          localStorage.setItem('adminUsers', JSON.stringify(savedAdmins));
        }
        setAdminUsers(savedAdmins);
        
        const user = savedAdmins.find((admin: any) => admin.username === username);
        setCurrentUser(user || savedAdmins[0]);
        
        setDataSource('localStorage');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminLoginTime');
    sessionStorage.removeItem('adminUsername');
    navigate('/admin-login');
  };

  // Update status change handler
  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      if (dataSource === 'firebase') {
        await updateQuoteStatus(id, newStatus);
      }
      
      // Update local state
      setQuoteRequests(prev => 
        prev.map(quote => 
          quote.id === id ? { ...quote, status: newStatus } : quote
        )
      );
      
      // Also update localStorage as backup
      const updatedQuotes = quoteRequests.map(quote => 
        quote.id === id ? { ...quote, status: newStatus } : quote
      );
      localStorage.setItem('quoteRequests', JSON.stringify(updatedQuotes));
      
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status. Please try again.');
    }
  };

  // Delete quote handler
  const handleDeleteQuote = async (id: string) => {
    if (!confirm('Are you sure you want to delete this quote request?')) {
      return;
    }

    try {
      if (dataSource === 'firebase') {
        await deleteQuoteRequest(id);
      }
      
      // Update local state
      setQuoteRequests(prev => prev.filter(quote => quote.id !== id));
      
      // Also update localStorage
      const updatedQuotes = quoteRequests.filter(quote => quote.id !== id);
      localStorage.setItem('quoteRequests', JSON.stringify(updatedQuotes));
      
    } catch (error) {
      console.error('Error deleting quote:', error);
      alert('Error deleting quote. Please try again.');
    }
  };

  // Add admin user handler
  const handleAddAdmin = async () => {
    if (!newAdminUsername.trim() || !newAdminPassword.trim()) {
      alert('Please enter both username and password');
      return;
    }

    // Check if username already exists
    if (adminUsers.some(admin => admin.username === newAdminUsername)) {
      alert('Username already exists');
      return;
    }

    try {
      const newAdmin = {
        username: newAdminUsername,
        password: newAdminPassword,
        role: 'admin' as const,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      if (dataSource === 'firebase') {
        const adminId = await addAdminUser(newAdmin);
        setAdminUsers(prev => [...prev, { ...newAdmin, id: adminId }]);
      } else {
        const adminWithId = { ...newAdmin, id: Date.now().toString() };
        setAdminUsers(prev => [...prev, adminWithId]);
        localStorage.setItem('adminUsers', JSON.stringify([...adminUsers, adminWithId]));
      }

      // Also save to localStorage credentials for login
      const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
      adminCredentials[newAdminUsername] = newAdminPassword;
      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));

      setNewAdminUsername('');
      setNewAdminPassword('');
      alert('Admin user added successfully');
      
    } catch (error) {
      console.error('Error adding admin:', error);
      alert('Error adding admin user. Please try again.');
    }
  };

  // Delete admin user handler
  const handleDeleteAdmin = async (id: string, username: string) => {
    if (username === 'admin') {
      alert('Cannot delete the main admin user');
      return;
    }

    if (!confirm(`Are you sure you want to delete admin user: ${username}?`)) {
      return;
    }

    try {
      if (dataSource === 'firebase') {
        await deleteAdminUser(id);
      }
      
      // Update local state
      setAdminUsers(prev => prev.filter(admin => admin.id !== id));
      
      // Also update localStorage
      const updatedAdmins = adminUsers.filter(admin => admin.id !== id);
      localStorage.setItem('adminUsers', JSON.stringify(updatedAdmins));
      
      // Remove from credentials
      const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
      delete adminCredentials[username];
      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
      
    } catch (error) {
      console.error('Error deleting admin:', error);
      alert('Error deleting admin user. Please try again.');
    }
  };

  const downloadQuoteAsPDF = (quote: QuoteRequest) => {
    // Create a simple text content for PDF (in a real app, you'd use a PDF library)
    const content = `
CURTAIN QUOTE REQUEST

Customer Information:
Name: ${quote.name}
Phone: ${quote.phone}
Email: ${quote.email || 'Not provided'}

Curtain Specifications:
Size: ${quote.width}m (W) x ${quote.height}m (H)
Number of Curtains: ${quote.numberOfCurtains}
Fabric Type: ${quote.fabricType}
Lace Trim: ${quote.lace}
Lining: ${quote.lining}
Number of Rooms: ${quote.rooms}

Delivery Address: ${quote.address}
Additional Notes: ${quote.notes || 'None'}

Status: ${quote.status}
Date: ${quote.date}
Request ID: ${quote.id}
    `;

    // Create and download as text file (in production, use a proper PDF library)
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quote-${quote.id}-${quote.name.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const addNewAdmin = () => {
    if (!newAdminUsername || !newAdminPassword) {
      alert('Please enter both username and password');
      return;
    }

    if (adminUsers.some(admin => admin.username === newAdminUsername)) {
      alert('Username already exists');
      return;
    }

    const newAdmin: AdminUser = {
      id: Date.now().toString(),
      username: newAdminUsername,
      role: 'admin',
      createdAt: new Date().toISOString(),
      lastLogin: 'Never'
    };

    const updatedAdmins = [...adminUsers, newAdmin];
    setAdminUsers(updatedAdmins);
    localStorage.setItem('adminUsers', JSON.stringify(updatedAdmins));
    
    // Save admin credentials (in production, this should be handled securely)
    const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
    adminCredentials[newAdminUsername] = newAdminPassword;
    localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));

    setNewAdminUsername('');
    setNewAdminPassword('');
    alert('Admin user created successfully');
  };

  const removeAdmin = (adminId: string) => {
    if (adminUsers.find(admin => admin.id === adminId)?.role === 'main') {
      alert('Cannot remove main admin');
      return;
    }

    if (confirm('Are you sure you want to remove this admin?')) {
      const updatedAdmins = adminUsers.filter(admin => admin.id !== adminId);
      setAdminUsers(updatedAdmins);
      localStorage.setItem('adminUsers', JSON.stringify(updatedAdmins));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Request':
        return 'bg-blue-100 text-blue-800';
      case 'Quote Sent':
        return 'bg-yellow-100 text-yellow-800';
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'In Production':
        return 'bg-purple-100 text-purple-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = quoteRequests.filter(request => {
    const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusCounts = () => {
    return {
      new: quoteRequests.filter(q => q.status === 'New Request').length,
      quoted: quoteRequests.filter(q => q.status === 'Quote Sent').length,
      production: quoteRequests.filter(q => q.status === 'In Production').length,
      completed: quoteRequests.filter(q => q.status === 'Completed').length
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Admin Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <h1 className="text-4xl font-bold">Admin Dashboard</h1>
              </div>
              <p className="text-muted-foreground">
                Welcome back, {currentUser?.username} ({currentUser?.role === 'main' ? 'Main Admin' : 'Admin'})
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm text-muted-foreground">
                <p>Last login: {new Date().toLocaleDateString()}</p>
                <p>Role: {currentUser?.role === 'main' ? 'Main Administrator' : 'Administrator'}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn-outline flex items-center space-x-2 text-red-600 border-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('quotes')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'quotes'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Quote Requests
                </button>
                {currentUser?.role === 'main' && (
                  <button
                    onClick={() => setActiveTab('admins')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'admins'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                    }`}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Admin Management
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'profile'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                  }`}
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Quote Requests Tab */}
          {activeTab === 'quotes' && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="card-soft p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{statusCounts.new}</div>
                  <div className="text-muted-foreground">New Requests</div>
                </div>
                <div className="card-soft p-6 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{statusCounts.quoted}</div>
                  <div className="text-muted-foreground">Quotes Sent</div>
                </div>
                <div className="card-soft p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{statusCounts.production}</div>
                  <div className="text-muted-foreground">In Production</div>
                </div>
                <div className="card-soft p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">{statusCounts.completed}</div>
                  <div className="text-muted-foreground">Completed</div>
                </div>
              </div>

              {/* Filters */}
              <div className="card-soft p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search by name, email, or phone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-soft w-full pl-10"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    <select
                      title="Filter by status"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="input-soft"
                    >
                      <option value="all">All Statuses</option>
                      <option value="New Request">New Request</option>
                      <option value="Quote Sent">Quote Sent</option>
                      <option value="Paid">Paid</option>
                      <option value="In Production">In Production</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quote Requests Table */}
              <div className="card-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-accent">
                      <tr>
                        <th className="text-left p-4 font-semibold">Customer</th>
                        <th className="text-left p-4 font-semibold">Curtain Details</th>
                        <th className="text-left p-4 font-semibold">Address</th>
                        <th className="text-left p-4 font-semibold">Status</th>
                        <th className="text-left p-4 font-semibold">Date</th>
                        <th className="text-left p-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((request) => (
                        <tr key={request.id} className="border-b border-border">
                          <td className="p-4">
                            <div>
                              <div className="font-semibold flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {request.name}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center mt-1">
                                <Phone className="w-3 h-3 mr-1" />
                                {request.phone}
                              </div>
                              {request.email && (
                                <div className="text-sm text-muted-foreground flex items-center mt-1">
                                  <Mail className="w-3 h-3 mr-1" />
                                  {request.email}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm space-y-1">
                              <div className="flex items-center">
                                <Ruler className="w-3 h-3 mr-1" />
                                <strong>Size:</strong> {request.width}m × {request.height}m
                              </div>
                              <div className="flex items-center">
                                <Package className="w-3 h-3 mr-1" />
                                <strong>Qty:</strong> {request.numberOfCurtains} panels
                              </div>
                              <div className="flex items-center">
                                <Palette className="w-3 h-3 mr-1" />
                                <strong>Fabric:</strong> {request.fabricType}
                              </div>
                              <div><strong>Lace:</strong> {request.lace}</div>
                              <div><strong>Lining:</strong> {request.lining}</div>
                              <div><strong>Rooms:</strong> {request.rooms}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {request.address}
                            </div>
                          </td>
                          <td className="p-4">
                            <select
                              title="Update status"
                              value={request.status}
                              onChange={(e) => updateQuoteStatus(request.id, e.target.value)}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 ${getStatusColor(request.status)}`}
                            >
                              <option value="New Request">New Request</option>
                              <option value="Quote Sent">Quote Sent</option>
                              <option value="Paid">Paid</option>
                              <option value="In Production">In Production</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                          <td className="p-4">
                            <div className="text-sm flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {request.date}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button 
                                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                title="View Details"
                                onClick={() => alert(`Request ID: ${request.id}\n\nNotes: ${request.notes || 'None'}`)}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="WhatsApp Customer"
                                onClick={() => window.open(`https://wa.me/${request.phone.replace(/\s+/g, '')}?text=Hi ${request.name}, regarding your curtain quote request...`, '_blank')}
                              >
                                <MessageCircle className="w-4 h-4" />
                              </button>
                              <button 
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Download PDF"
                                onClick={() => downloadQuoteAsPDF(request)}
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Admin Management Tab (Main Admin Only) */}
          {activeTab === 'admins' && currentUser?.role === 'main' && (
            <div className="space-y-8">
              <div className="card-soft p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Admin</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Username"
                    value={newAdminUsername}
                    onChange={(e) => setNewAdminUsername(e.target.value)}
                    className="input-soft"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    className="input-soft"
                  />
                  <button
                    onClick={addNewAdmin}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Add Admin</span>
                  </button>
                </div>
              </div>

              <div className="card-soft overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-xl font-semibold">Admin Users</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-accent">
                      <tr>
                        <th className="text-left p-4 font-semibold">Username</th>
                        <th className="text-left p-4 font-semibold">Role</th>
                        <th className="text-left p-4 font-semibold">Created</th>
                        <th className="text-left p-4 font-semibold">Last Login</th>
                        <th className="text-left p-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminUsers.map((admin) => (
                        <tr key={admin.id} className="border-b border-border">
                          <td className="p-4 font-medium">{admin.username}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              admin.role === 'main' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {admin.role === 'main' ? 'Main Admin' : 'Admin'}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {new Date(admin.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {admin.lastLogin === 'Never' ? 'Never' : new Date(admin.lastLogin).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            {admin.role !== 'main' && (
                              <button
                                onClick={() => removeAdmin(admin.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Remove Admin"
                              >
                                <UserMinus className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="card-soft p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{currentUser?.username}</h3>
                      <p className="text-muted-foreground">
                        {currentUser?.role === 'main' ? 'Main Administrator' : 'Administrator'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Username</label>
                      <input
                        type="text"
                        value={currentUser?.username || ''}
                        disabled
                        className="input-soft w-full bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Role</label>
                      <input
                        type="text"
                        value={currentUser?.role === 'main' ? 'Main Administrator' : 'Administrator'}
                        disabled
                        className="input-soft w-full bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Account Created</label>
                      <input
                        type="text"
                        value={currentUser ? new Date(currentUser.createdAt).toLocaleDateString() : ''}
                        disabled
                        className="input-soft w-full bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Login</label>
                      <input
                        type="text"
                        value={new Date().toLocaleDateString()}
                        disabled
                        className="input-soft w-full bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4">Permissions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>View and manage quote requests</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Update order status</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Download quote PDFs</span>
                      </div>
                      {currentUser?.role === 'main' && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Manage admin users (Main Admin only)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
