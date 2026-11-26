import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  LayoutDashboard,
  User,
  Package,
  MapPin,
  Heart,
  Shield,
  LogOut,
  Sparkles,
  Compass,
} from 'lucide-react';

export const AccountLayout = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
      isActive
        ? 'bg-aura-espresso text-white shadow-xs'
        : 'text-aura-espresso hover:bg-aura-cream text-aura-grey hover:text-aura-espresso'
    }`;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Client Portal', href: '/account' }]} />

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-aura-beige pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-aura-gold font-bold block mb-1">
            Privilege Portal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-aura-espresso font-medium">
            Welcome, {currentUser?.fullName || 'Connoisseur'}
          </h1>
          <p className="text-xs text-aura-grey mt-0.5">
            Role: <strong className="text-aura-espresso">{currentUser?.role || 'VIP Member'}</strong> • {currentUser?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="self-start md:self-auto px-4 py-2 border border-aura-beige hover:border-red-300 text-aura-grey hover:text-red-600 rounded-xl text-xs font-semibold transition-colors flex items-center space-x-1.5 bg-white"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Account Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-white p-4 rounded-2xl border border-aura-beige shadow-xs space-y-1.5">
            <NavLink to="/account" end className={navClass}>
              <LayoutDashboard className="w-4 h-4 text-aura-gold" />
              <span>Overview</span>
            </NavLink>

            <NavLink to="/account/profile" className={navClass}>
              <User className="w-4 h-4 text-aura-gold" />
              <span>Personal Profile</span>
            </NavLink>

            <NavLink to="/account/orders" className={navClass}>
              <Package className="w-4 h-4 text-aura-gold" />
              <span>My Orders</span>
            </NavLink>

            <NavLink to="/account/addresses" className={navClass}>
              <MapPin className="w-4 h-4 text-aura-gold" />
              <span>Saved Addresses</span>
            </NavLink>

            <NavLink to="/wishlist" className={navClass}>
              <Heart className="w-4 h-4 text-aura-gold" />
              <span>My Wishlist</span>
            </NavLink>

            <NavLink to="/account/security" className={navClass}>
              <Shield className="w-4 h-4 text-aura-gold" />
              <span>Account Security</span>
            </NavLink>

            <div className="pt-2 border-t border-aura-beige mt-2">
              <NavLink to="/track-order" className={navClass}>
                <Compass className="w-4 h-4 text-aura-gold" />
                <span>Track Demo Order</span>
              </NavLink>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
