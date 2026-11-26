import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sentMessage, setSentMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const res = await authService.forgotPassword(email);
      setSentMessage(res.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 animate-fadeIn">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl text-aura-espresso font-medium">
          Forgot Password
        </h1>
        <p className="text-xs text-aura-grey mt-1">
          Enter your email to receive a simulated recovery authorization link.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-luxury space-y-6">
        {sentMessage ? (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{sentMessage}</span>
            </div>

            <div className="p-4 bg-aura-cream rounded-xl border border-aura-beige text-xs space-y-2">
              <p className="font-semibold text-aura-espresso">Prototype Simulation Shortcut:</p>
              <p className="text-aura-grey">In this frontend evaluation build, test the reset password flow directly:</p>
              <Link
                to="/reset-password?token=demo_sample_token"
                className="w-full py-2 px-3 bg-aura-espresso text-white rounded-lg text-xs font-semibold block text-center hover:bg-aura-espresso-light transition-colors"
              >
                Proceed to Reset Password Demo Screen →
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-aura-espresso mb-1">
                Your Account Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-aura-grey absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena.vance@aurafragrance.demo"
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-aura-ivory border border-aura-beige rounded-xl focus:outline-none focus:border-aura-gold text-aura-espresso"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-aura-espresso hover:bg-aura-espresso-light text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>{loading ? 'Transmitting Dispatch...' : 'Send Reset Link'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-aura-gold" />
            </button>
          </form>
        )}

        <p className="text-center text-xs text-aura-grey border-t border-aura-beige pt-4">
          Remembered your password?{' '}
          <Link to="/login" className="font-semibold text-aura-espresso hover:text-aura-gold underline">
            Return to Login
          </Link>
        </p>
      </div>
    </div>
  );
};
