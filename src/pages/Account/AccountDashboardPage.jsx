import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { orderService } from '../../services/orderService';
import { addressService } from '../../services/addressService';
import {
  Package,
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const AccountDashboardPage = () => {
  const { currentUser } = useAuth();
  const { wishlistCount } = useWishlist();

  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const userOrders = await orderService.getUserOrders(currentUser?.email);
        setOrders(userOrders);
        const userAddresses = addressService.getAddresses(currentUser?.id);
        setAddresses(userAddresses);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [currentUser]);

  const recentOrder = orders[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-aura-cream via-aura-ivory to-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-aura-gold font-bold block mb-1">
            VIP Atelier Membership
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-aura-espresso">
            Hello, {currentUser?.fullName}
          </h2>
          <p className="text-xs text-aura-grey mt-1">
            Enjoy exclusive preview access to upcoming seasonal reserve flacons.
          </p>
        </div>

        <Link
          to="/shop"
          className="px-5 py-2.5 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-aura-espresso-light transition-colors whitespace-nowrap shadow-xs"
        >
          Explore Catalogue
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/account/orders"
          className="bg-white p-5 rounded-2xl border border-aura-beige shadow-xs hover:border-aura-gold transition-all"
        >
          <div className="flex items-center justify-between text-aura-gold mb-2">
            <Package className="w-5 h-5" />
            <span className="text-2xl font-bold font-serif text-aura-espresso">{orders.length}</span>
          </div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-aura-espresso">Total Orders</h3>
          <p className="text-[11px] text-aura-grey mt-0.5">Track simulated deliveries</p>
        </Link>

        <Link
          to="/wishlist"
          className="bg-white p-5 rounded-2xl border border-aura-beige shadow-xs hover:border-aura-gold transition-all"
        >
          <div className="flex items-center justify-between text-aura-gold mb-2">
            <Heart className="w-5 h-5" />
            <span className="text-2xl font-bold font-serif text-aura-espresso">{wishlistCount}</span>
          </div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-aura-espresso">Saved Wishlist</h3>
          <p className="text-[11px] text-aura-grey mt-0.5">Curated fragrance favorites</p>
        </Link>

        <Link
          to="/account/addresses"
          className="bg-white p-5 rounded-2xl border border-aura-beige shadow-xs hover:border-aura-gold transition-all"
        >
          <div className="flex items-center justify-between text-aura-gold mb-2">
            <MapPin className="w-5 h-5" />
            <span className="text-2xl font-bold font-serif text-aura-espresso">{addresses.length}</span>
          </div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-aura-espresso">Saved Addresses</h3>
          <p className="text-[11px] text-aura-grey mt-0.5">Primary delivery destinations</p>
        </Link>
      </div>

      {/* Recent Order Preview */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-aura-beige pb-4">
          <h3 className="font-serif text-xl font-medium text-aura-espresso">
            Most Recent Demo Order
          </h3>
          <Link to="/account/orders" className="text-xs text-aura-gold hover:underline font-semibold flex items-center space-x-1">
            <span>View All ({orders.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentOrder ? (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 bg-aura-ivory p-4 rounded-xl">
              <div>
                <span className="text-aura-grey">Order Reference:</span>{' '}
                <strong className="text-aura-espresso font-mono font-bold">{recentOrder.id}</strong>
              </div>
              <div>
                <span className="text-aura-grey">Date:</span>{' '}
                <strong className="text-aura-espresso">{new Date(recentOrder.date).toLocaleDateString('en-IN')}</strong>
              </div>
              <div>
                <span className="text-aura-grey">Status:</span>{' '}
                <span className="px-2 py-0.5 bg-aura-cream font-bold text-aura-espresso rounded border border-aura-gold/30">
                  {recentOrder.status}
                </span>
              </div>
              <div>
                <span className="text-aura-grey">Total:</span>{' '}
                <strong className="text-aura-gold font-bold">₹{recentOrder.pricing?.total?.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-aura-beige/60">
              {recentOrder.items.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-10 h-12 object-cover rounded-lg flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-aura-espresso">{item.name}</h4>
                      <p className="text-aura-grey">{item.size} • Qty {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-aura-espresso">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to={`/track-order?orderId=${recentOrder.id}`}
                className="px-4 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-lg hover:bg-aura-espresso-light transition-colors flex items-center space-x-1"
              >
                <Truck className="w-3.5 h-3.5 text-aura-gold" />
                <span>Track This Order</span>
              </Link>
              <Link
                to={`/account/orders/${recentOrder.id}`}
                className="px-4 py-2 border border-aura-beige text-aura-espresso text-xs font-semibold rounded-lg hover:bg-aura-cream transition-colors"
              >
                View Full Details
              </Link>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-xs text-aura-grey">
            No demonstration orders placed yet. Place your first order to test tracking!
          </div>
        )}
      </div>
    </div>
  );
};
