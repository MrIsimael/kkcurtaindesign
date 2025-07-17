import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where,
  Timestamp,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

export interface QuoteRequest {
  id?: string;
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
  createdAt?: any;
}

export interface AdminUser {
  id?: string;
  username: string;
  password?: string;
  role: 'main' | 'admin';
  createdAt: string;
  lastLogin: string;
}

// Quote Request Functions
export const addQuoteRequest = async (quoteData: Omit<QuoteRequest, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'quoteRequests'), {
      ...quoteData,
      createdAt: serverTimestamp()
    });
    console.log('Quote request added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding quote request:', error);
    throw error;
  }
};

export const getQuoteRequests = async (): Promise<QuoteRequest[]> => {
  try {
    const q = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as QuoteRequest[];
  } catch (error) {
    console.error('Error getting quote requests:', error);
    throw error;
  }
};

export const updateQuoteStatus = async (id: string, status: string) => {
  try {
    const quoteRef = doc(db, 'quoteRequests', id);
    await updateDoc(quoteRef, { 
      status,
      updatedAt: serverTimestamp()
    });
    console.log('Quote status updated successfully');
  } catch (error) {
    console.error('Error updating quote status:', error);
    throw error;
  }
};

export const deleteQuoteRequest = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'quoteRequests', id));
    console.log('Quote request deleted successfully');
  } catch (error) {
    console.error('Error deleting quote request:', error);
    throw error;
  }
};

// Admin User Functions
export const addAdminUser = async (adminData: Omit<AdminUser, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'adminUsers'), {
      ...adminData,
      createdAt: serverTimestamp()
    });
    console.log('Admin user added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding admin user:', error);
    throw error;
  }
};

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'adminUsers'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as AdminUser[];
  } catch (error) {
    console.error('Error getting admin users:', error);
    throw error;
  }
};

export const getAdminByUsername = async (username: string): Promise<AdminUser | null> => {
  try {
    const q = query(collection(db, 'adminUsers'), where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data()
    } as AdminUser;
  } catch (error) {
    console.error('Error getting admin by username:', error);
    throw error;
  }
};

export const updateAdminLastLogin = async (id: string) => {
  try {
    const adminRef = doc(db, 'adminUsers', id);
    await updateDoc(adminRef, {
      lastLogin: new Date().toISOString(),
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating admin last login:', error);
    throw error;
  }
};

export const deleteAdminUser = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'adminUsers', id));
    console.log('Admin user deleted successfully');
  } catch (error) {
    console.error('Error deleting admin user:', error);
    throw error;
  }
};

// Initialize default admin user if not exists
export const initializeDefaultAdmin = async () => {
  try {
    const existingAdmin = await getAdminByUsername('admin');
    
    if (!existingAdmin) {
      const defaultAdmin: Omit<AdminUser, 'id'> = {
        username: 'admin',
        password: 'KKCurtain2024!', // In production, hash this password
        role: 'main',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      await addAdminUser(defaultAdmin);
      console.log('Default admin user created');
    }
  } catch (error) {
    console.error('Error initializing default admin:', error);
  }
};