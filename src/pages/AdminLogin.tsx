import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { getAdminByUsername, updateAdminLastLogin, initializeDefaultAdmin } from '../lib/firebaseService';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Admin credentials (fallback for offline mode)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'KKCurtain2024!'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Initialize default admin if needed
      await initializeDefaultAdmin();
      
      // Check Firebase admin credentials first
      const firebaseAdmin = await getAdminByUsername(credentials.username);
      
      let isValidAdmin = false;
      let adminId = '';
      
      if (firebaseAdmin && firebaseAdmin.password === credentials.password) {
        isValidAdmin = true;
        adminId = firebaseAdmin.id!;
        
        // Update last login time
        await updateAdminLastLogin(adminId);
      } else {
        // Fallback to hardcoded credentials
        const isMainAdmin = credentials.username === ADMIN_CREDENTIALS.username && 
                           credentials.password === ADMIN_CREDENTIALS.password;
        
        // Check additional admin credentials from localStorage
        const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
        const isAdditionalAdmin = adminCredentials[credentials.username] === credentials.password;
        
        isValidAdmin = isMainAdmin || isAdditionalAdmin;
      }
      
      if (isValidAdmin) {
        // Set admin session
        sessionStorage.setItem('adminAuthenticated', 'true');
        sessionStorage.setItem('adminLoginTime', Date.now().toString());
        sessionStorage.setItem('adminUsername', credentials.username);
        
        navigate('/admin-kk');
      } else {
        setError('Invalid username or password');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      
      // Fallback to offline mode
      const isMainAdmin = credentials.username === ADMIN_CREDENTIALS.username && 
                         credentials.password === ADMIN_CREDENTIALS.password;
      
      if (isMainAdmin) {
        sessionStorage.setItem('adminAuthenticated', 'true');
        sessionStorage.setItem('adminLoginTime', Date.now().toString());
        sessionStorage.setItem('adminUsername', credentials.username);
        navigate('/admin-kk');
      } else {
        setError('Invalid username or password (offline mode)');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card-soft p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
            <p className="text-muted-foreground">KK Curtain Design Dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className="input-soft w-full"
                placeholder="Enter admin username"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="input-soft w-full pr-10"
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Website
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Authorized personnel only</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;