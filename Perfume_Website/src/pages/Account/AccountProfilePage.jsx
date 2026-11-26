import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Phone, CheckCircle2, Sparkles } from 'lucide-react';

export const AccountProfilePage = () => {
  const { currentUser, updateProfile } = useAuth();

  const [form, setForm] = useState({
    fullName: currentUser?.fullName || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    try {
      await updateProfile(form);
      setSuccessMsg('Your profile has been updated in demo storage.');
      setTimeout(() => setSuccessMsg(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-6 animate-fadeIn">
      <div className="border-b border-aura-beige pb-4">
        <h2 className="font-serif text-2xl font-medium text-aura-espresso">
          Personal Profile
        </h2>
        <p className="text-xs text-aura-grey mt-0.5">
          Manage your personal credentials, contact numbers, and atelier preferences.
        </p>
      </div>

      {successMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
            <input
              type="text"
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center space-x-2"
        >
          <span>{loading ? 'Saving...' : 'Save Profile Changes'}</span>
        </button>
      </form>
    </div>
  );
};
