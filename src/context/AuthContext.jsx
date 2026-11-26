import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleAuthChange = (e) => {
      setCurrentUser(e.detail);
    };
    window.addEventListener('aura-auth-changed', handleAuthChange);
    return () => window.removeEventListener('aura-auth-changed', handleAuthChange);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authService.login(email, password);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    setLoading(true);
    try {
      const res = await authService.signup(data);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const quickDemoLogin = async () => {
    setLoading(true);
    try {
      const res = await authService.quickDemoLogin();
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const res = await authService.loginWithGoogle();
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const updateProfile = async (profileData) => {
    setLoading(true);
    try {
      const res = await authService.updateProfile(profileData);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        isAuthenticated: !!currentUser,
        login,
        signup,
        quickDemoLogin,
        loginWithGoogle,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
