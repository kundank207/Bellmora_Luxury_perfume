import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { addressService } from '../../services/addressService';
import { MapPin, Plus, Trash2, CheckCircle2, X } from 'lucide-react';

export const AccountAddressesPage = () => {
  const { currentUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newAddr, setNewAddr] = useState({
    name: currentUser?.fullName || '',
    phone: currentUser?.phone || '',
    flat: '',
    street: '',
    landmark: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400026',
    type: 'Home',
    isDefault: false,
  });

  const loadAddresses = () => {
    const list = addressService.getAddresses(currentUser?.id);
    setAddresses(list);
  };

  useEffect(() => {
    loadAddresses();
  }, [currentUser]);

  const handleAdd = async (e) => {
    e.preventDefault();
    await addressService.addAddress(currentUser?.id, newAddr);
    setModalOpen(false);
    loadAddresses();
  };

  const handleDelete = async (id) => {
    await addressService.deleteAddress(currentUser?.id, id);
    loadAddresses();
  };

  const handleSetDefault = async (id) => {
    await addressService.setDefaultAddress(currentUser?.id, id);
    loadAddresses();
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-aura-beige shadow-xs space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-aura-beige pb-4">
        <div>
          <h2 className="font-serif text-2xl font-medium text-aura-espresso">
            Saved Delivery Addresses
          </h2>
          <p className="text-xs text-aura-grey mt-0.5">
            Manage your residences, offices, and gift delivery destinations.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-aura-espresso text-white text-xs font-semibold rounded-xl hover:bg-aura-espresso-light transition-colors flex items-center space-x-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Address</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
              addr.isDefault
                ? 'border-aura-gold bg-aura-cream/40 shadow-xs'
                : 'border-aura-beige bg-aura-ivory/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-aura-ivory text-aura-espresso border border-aura-beige">
                  {addr.type}
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] font-bold text-aura-gold-dark flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Default Address
                  </span>
                )}
              </div>

              <h4 className="font-serif text-base font-semibold text-aura-espresso">{addr.name}</h4>
              <p className="text-xs text-aura-grey mt-1">{addr.flat}</p>
              <p className="text-xs text-aura-grey">{addr.street}</p>
              <p className="text-xs text-aura-grey">{addr.city}, {addr.state} - {addr.pincode}</p>
              <p className="text-xs text-aura-grey mt-1">Phone: {addr.phone}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-aura-beige/60 flex items-center justify-between">
              {!addr.isDefault ? (
                <button
                  onClick={() => handleSetDefault(addr.id)}
                  className="text-xs text-aura-gold hover:underline font-medium"
                >
                  Set as Default
                </button>
              ) : (
                <span />
              )}
              <button
                onClick={() => handleDelete(addr.id)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center space-x-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aura-espresso/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-aura-beige relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-aura-grey hover:text-aura-espresso"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-medium text-aura-espresso mb-4">
              Add New Address
            </h3>

            <form onSubmit={handleAdd} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Recipient Name</label>
                <input
                  type="text"
                  required
                  value={newAddr.name}
                  onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                  className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={newAddr.phone}
                  onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                  className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Flat / Building</label>
                <input
                  type="text"
                  required
                  value={newAddr.flat}
                  onChange={(e) => setNewAddr({ ...newAddr, flat: e.target.value })}
                  className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Street / Area</label>
                <input
                  type="text"
                  required
                  value={newAddr.street}
                  onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                  className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={newAddr.city}
                    onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                    className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">PIN Code</label>
                  <input
                    type="text"
                    required
                    value={newAddr.pincode}
                    onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                    className="w-full p-2 bg-aura-ivory border border-aura-beige rounded-lg font-mono"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-1">
                {['Home', 'Work'].map((type) => (
                  <label key={type} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      checked={newAddr.type === type}
                      onChange={() => setNewAddr({ ...newAddr, type })}
                      className="accent-aura-gold"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-aura-espresso text-white font-semibold rounded-xl mt-3"
              >
                Save Address
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
