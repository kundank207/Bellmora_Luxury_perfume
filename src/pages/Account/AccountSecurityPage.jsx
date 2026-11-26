import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Shield, Lock, LogOut, CheckCircle2 } from 'lucide-react';

export const AccountSecurityPage = () => {
  const { currentUser, logout } = useAuth();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError('');
    if (newPassword.length < 6) {
      return setError('New password must be at least 6 characters.');
    }
    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match.');
    }
    setSuccess(true);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-6 animate-fadeIn">
      <div className="border-b border-aura-beige pb-4">
        <h2 className="font-serif text-2xl font-medium text-aura-espresso">
          Account Security & Active Sessions
        </h2>
        <p className="text-xs text-aura-grey mt-0.5">
          Manage your password credentials and prototype session authorization.
        </p>
      </div>

      {success && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Demo password successfully updated in prototype storage.</span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            Current Password
          </label>
          <input
            type="password"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            New Password
          </label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="At least 6 characters"
            className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat new password"
            className="w-full px-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-aura-espresso-light transition-colors"
        >
          Update Demo Password
        </button>
      </form>

      {/* Active Session Info */}
      <div className="pt-6 border-t border-aura-beige max-w-md space-y-3">
        <h3 className="font-serif text-lg font-medium text-aura-espresso">
          Current Simulated Session
        </h3>
        <div className="p-4 bg-aura-ivory rounded-2xl text-xs space-y-1">
          <p>User Identity: <strong className="text-aura-espresso">{currentUser?.fullName}</strong></p>
          <p>Email: <span className="font-mono text-aura-espresso">{currentUser?.email}</span></p>
          <p>Auth Token: <span className="font-mono text-[10px] text-aura-grey">{currentUser?.token || 'active_prototype_session'}</span></p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl transition-colors flex items-center space-x-1"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out from this Browser</span>
        </button>
      </div>
    </div>
  );
};
