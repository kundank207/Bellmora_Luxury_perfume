import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { orderService } from '../../services/orderService';
import { Package, Truck, ArrowRight, Eye, Sparkles } from 'lucide-react';

export const AccountOrdersPage = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    orderService.getUserOrders(currentUser?.email).then((res) => {
      setOrders(res);
      setLoading(false);
    });
  }, [currentUser]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-aura-beige pb-4">
        <div>
          <h2 className="font-serif text-2xl font-medium text-aura-espresso">
            Order History ({orders.length})
          </h2>
          <p className="text-xs text-aura-grey mt-0.5">
            Review simulated orders, current dispatch milestones, and invoices.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-xs text-aura-grey">Loading order records...</div>
      ) : orders.length === 0 ? (
        <div className="py-16 text-center">
          <Package className="w-12 h-12 text-aura-gold mx-auto mb-3 opacity-60" />
          <h3 className="font-serif text-lg font-medium text-aura-espresso mb-1">No Orders Found</h3>
          <p className="text-xs text-aura-grey mb-4">You have not placed any demonstration orders yet.</p>
          <Link
            to="/shop"
            className="px-6 py-2.5 bg-aura-espresso text-white text-xs font-semibold uppercase tracking-wider rounded-xl inline-block"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div
              key={o.id}
              className="p-5 rounded-2xl border border-aura-beige hover:border-aura-gold/50 bg-aura-ivory/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-bold text-aura-espresso">{o.id}</span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-aura-cream text-aura-espresso border border-aura-gold/30">
                    {o.status}
                  </span>
                  <span className="text-xs text-aura-grey">
                    • {new Date(o.date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-aura-grey">
                  <span>{o.items.length} Flacon(s):</span>
                  <span className="font-medium text-aura-espresso">
                    {o.items.map((i) => i.name).join(', ')}
                  </span>
                </div>

                <p className="text-[11px] text-aura-grey">
                  Payment: <strong className="text-aura-espresso">{o.paymentMethod}</strong> • Courier: {o.courier}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="text-left md:text-right">
                  <span className="text-base font-bold text-aura-gold block">
                    ₹{o.pricing?.total?.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-aura-grey">{o.estimatedDelivery}</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/track-order?orderId=${o.id}`}
                    className="p-2.5 bg-aura-cream text-aura-espresso rounded-xl hover:bg-aura-gold hover:text-white transition-colors text-xs font-semibold flex items-center space-x-1"
                    title="Track Order"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Track</span>
                  </Link>

                  <Link
                    to={`/account/orders/${o.id}`}
                    className="p-2.5 bg-aura-espresso text-white rounded-xl hover:bg-aura-espresso-light transition-colors text-xs font-semibold flex items-center space-x-1"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
