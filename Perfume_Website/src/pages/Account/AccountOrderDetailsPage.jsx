import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../../services/orderService';
import { Package, Truck, ArrowLeft, MapPin, CreditCard, Sparkles, Calendar } from 'lucide-react';

export const AccountOrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    orderService.getOrderById(id).then((res) => {
      setOrder(res);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="py-16 text-center text-xs text-aura-grey">Loading order...</div>;
  if (!order) return <div className="py-16 text-center text-xs text-aura-grey">Order not found.</div>;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-aura-beige pb-4">
        <div className="flex items-center space-x-3">
          <Link to="/account/orders" className="p-2 rounded-lg bg-aura-cream hover:bg-aura-beige transition-colors">
            <ArrowLeft className="w-4 h-4 text-aura-espresso" />
          </Link>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-aura-gold font-bold block">
              Order Details
            </span>
            <h2 className="font-serif text-2xl font-medium text-aura-espresso">
              {order.id}
            </h2>
          </div>
        </div>

        <Link
          to={`/track-order?orderId=${order.id}`}
          className="px-4 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 hover:bg-aura-espresso-light transition-colors"
        >
          <Truck className="w-4 h-4 text-aura-gold" />
          <span>Track Delivery</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-aura-ivory rounded-2xl text-xs">
        <div>
          <span className="text-aura-grey block">Date Placed</span>
          <strong className="text-aura-espresso">{new Date(order.date).toLocaleString('en-IN')}</strong>
        </div>
        <div>
          <span className="text-aura-grey block">Fulfillment Stage</span>
          <strong className="text-aura-gold font-bold">{order.status}</strong>
        </div>
        <div>
          <span className="text-aura-grey block">Waybill</span>
          <strong className="text-aura-espresso font-mono">{order.trackingNumber}</strong>
        </div>
      </div>

      {/* Items list */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-aura-espresso mb-3">Items in Parcel</h3>
        <div className="divide-y divide-aura-beige/60">
          {order.items.map((item, idx) => (
            <div key={idx} className="py-3 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <img src={item.image} alt={item.name} className="w-12 h-14 object-cover rounded-lg" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-aura-espresso">{item.name}</h4>
                  <p className="text-aura-grey">{item.size} • Qty {item.quantity}</p>
                </div>
              </div>
              <span className="font-bold text-aura-espresso">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Destination & Pricing */}
      <div className="pt-4 border-t border-aura-beige grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
        <div>
          <h4 className="font-serif text-base font-semibold text-aura-espresso mb-2 flex items-center">
            <MapPin className="w-4 h-4 text-aura-gold mr-1" />
            <span>Delivery Destination</span>
          </h4>
          <p className="font-semibold text-aura-espresso">{order.shippingAddress.name}</p>
          <p className="text-aura-grey">{order.shippingAddress.flat}, {order.shippingAddress.street}</p>
          <p className="text-aura-grey">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
        </div>

        <div className="space-y-1.5">
          <h4 className="font-serif text-base font-semibold text-aura-espresso mb-2">Summary</h4>
          <div className="flex justify-between text-aura-grey">
            <span>Subtotal</span>
            <span>₹{order.pricing.subtotal.toLocaleString('en-IN')}</span>
          </div>
          {order.pricing.discount > 0 && (
            <div className="flex justify-between text-emerald-700">
              <span>Discount</span>
              <span>-₹{order.pricing.discount.toLocaleString('en-IN')}</span>
            </div>
          )}
          <div className="flex justify-between text-aura-grey">
            <span>Shipping</span>
            <span>{order.pricing.shipping === 0 ? 'Complimentary' : `₹${order.pricing.shipping}`}</span>
          </div>
          <div className="flex justify-between font-bold text-aura-espresso pt-2 border-t border-aura-beige text-sm">
            <span>Total</span>
            <span className="text-aura-gold">₹{order.pricing.total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
