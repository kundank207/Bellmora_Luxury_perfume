import { demoUsers, DEMO_CREDENTIALS } from '../data/demoUsers';

const STORAGE_KEYS = {
  CURRENT_USER: 'aura_demo_current_user',
  ALL_USERS: 'aura_demo_users_list',
};

// Initialize localStorage with demo users if not present
const getStoredUsers = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fallback
  }
  try {
    localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(demoUsers));
  } catch {}
  return [...demoUsers];
};

export const authService = {
  /**
   * Simulated login
   */
  async login(email, password) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const cleanEmail = (email || '').trim().toLowerCase();
    const users = getStoredUsers();
    
    // Check for demo account or registered account
    const matched = users.find((u) => (u.email || '').toLowerCase() === cleanEmail);

    if (!matched) {
      if (cleanEmail === DEMO_CREDENTIALS.email.toLowerCase()) {
        const defaultUser = {
          id: 'user_demo_01',
          fullName: DEMO_CREDENTIALS.name,
          email: DEMO_CREDENTIALS.email,
          phone: '+91 98765 43210',
          role: 'VIP Connoisseur',
          isDemo: true,
        };
        this.setSession(defaultUser);
        return { success: true, user: defaultUser };
      }
      throw new Error('Account not recognized. You may use the provided Quick Demo Account or register a new one.');
    }

    const sessionUser = {
      id: matched.id,
      fullName: matched.fullName || 'Elena Vance',
      email: matched.email,
      phone: matched.phone || '+91 98765 43210',
      role: matched.role || 'Connoisseur Member',
      isDemo: true,
      token: `demo_token_${Date.now()}`,
    };

    this.setSession(sessionUser);
    return { success: true, user: sessionUser };
  },

  async signup({ fullName, email, phone, password }) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const cleanEmail = (email || '').trim().toLowerCase();
    const users = getStoredUsers();

    if (users.some((u) => (u.email || '').toLowerCase() === cleanEmail)) {
      throw new Error('An account with this email address already exists in demo storage.');
    }

    const newUser = {
      id: `user_demo_${Date.now()}`,
      fullName: (fullName || 'New Member').trim(),
      email: cleanEmail,
      phone: (phone || '').trim(),
      role: 'Member Connoisseur',
      memberSince: 'Today',
      savedAddresses: [],
      isDemo: true,
    };

    users.push(newUser);
    try {
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    } catch {}

    const sessionUser = {
      ...newUser,
      token: `demo_token_${Date.now()}`,
    };

    this.setSession(sessionUser);
    return { success: true, user: sessionUser };
  },

  async quickDemoLogin() {
    return this.login(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password);
  },

  async loginWithGoogle() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const googleDemoUser = {
      id: 'user_google_demo_01',
      fullName: 'Julian Sterling',
      email: 'julian.sterling@aurafragrance.demo',
      phone: '+91 98111 22334',
      role: 'Google Verified Member',
      isDemo: true,
      token: `demo_google_token_${Date.now()}`,
    };
    this.setSession(googleDemoUser);
    return { success: true, user: googleDemoUser };
  },

  logout() {
    try {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } catch {}
    window.dispatchEvent(new CustomEvent('aura-auth-changed', { detail: null }));
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (!data) return null;
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object' && parsed.fullName) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  },

  isAuthenticated() {
    return !!this.getCurrentUser();
  },

  setSession(user) {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } catch {}
    window.dispatchEvent(new CustomEvent('aura-auth-changed', { detail: user }));
  },

  async forgotPassword(email) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      success: true,
      message: `A simulated password reset dispatch has been logged for ${email}. Proceed to the reset demo screen.`,
    };
  },

  async resetPassword(token, newPassword) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      success: true,
      message: 'Demo password successfully updated in prototype state.',
    };
  },

  async updateProfile(profileData) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const current = this.getCurrentUser();
    if (!current) throw new Error('No active session found');

    const updated = { ...current, ...profileData };
    this.setSession(updated);

    const users = getStoredUsers().map((u) => (u.id === current.id ? { ...u, ...profileData } : u));
    try {
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    } catch {}

    return { success: true, user: updated };
  }
};
