import { demoUsers } from '../data/demoUsers';

const ADDRESS_STORAGE_KEY = 'aura_demo_saved_addresses';

export const addressService = {
  getAddresses(userId = null) {
    const raw = localStorage.getItem(ADDRESS_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (userId && parsed[userId]) return parsed[userId];
        if (!userId) return Object.values(parsed).flat();
      } catch {
        // fallback
      }
    }

    // Initialize with default demo users addresses
    const initialMap = {};
    demoUsers.forEach((u) => {
      initialMap[u.id] = u.savedAddresses || [];
    });
    localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(initialMap));

    if (userId && initialMap[userId]) return initialMap[userId];
    return initialMap['user_demo_01'] || [];
  },

  saveAddressMap(map) {
    localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(map));
  },

  getAllMap() {
    const raw = localStorage.getItem(ADDRESS_STORAGE_KEY);
    if (!raw) {
      const initialMap = {};
      demoUsers.forEach((u) => {
        initialMap[u.id] = u.savedAddresses || [];
      });
      return initialMap;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  },

  async addAddress(userId, addressData) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const allMap = this.getAllMap();
    const targetUserId = userId || 'user_demo_01';
    const userAddresses = allMap[targetUserId] || [];

    const newAddress = {
      ...addressData,
      id: `addr_${Date.now()}`,
      isDefault: userAddresses.length === 0 ? true : !!addressData.isDefault
    };

    if (newAddress.isDefault) {
      userAddresses.forEach((a) => (a.isDefault = false));
    }

    userAddresses.unshift(newAddress);
    allMap[targetUserId] = userAddresses;
    this.saveAddressMap(allMap);

    return newAddress;
  },

  async updateAddress(userId, addressId, updatedData) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const allMap = this.getAllMap();
    const targetUserId = userId || 'user_demo_01';
    let userAddresses = allMap[targetUserId] || [];

    if (updatedData.isDefault) {
      userAddresses.forEach((a) => (a.isDefault = false));
    }

    userAddresses = userAddresses.map((a) => (a.id === addressId ? { ...a, ...updatedData } : a));
    allMap[targetUserId] = userAddresses;
    this.saveAddressMap(allMap);

    return userAddresses.find((a) => a.id === addressId);
  },

  async deleteAddress(userId, addressId) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const allMap = this.getAllMap();
    const targetUserId = userId || 'user_demo_01';
    let userAddresses = allMap[targetUserId] || [];

    userAddresses = userAddresses.filter((a) => a.id !== addressId);
    if (userAddresses.length > 0 && !userAddresses.some((a) => a.isDefault)) {
      userAddresses[0].isDefault = true;
    }

    allMap[targetUserId] = userAddresses;
    this.saveAddressMap(allMap);
    return userAddresses;
  },

  async setDefaultAddress(userId, addressId) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const allMap = this.getAllMap();
    const targetUserId = userId || 'user_demo_01';
    const userAddresses = allMap[targetUserId] || [];

    userAddresses.forEach((a) => {
      a.isDefault = a.id === addressId;
    });

    allMap[targetUserId] = userAddresses;
    this.saveAddressMap(allMap);
    return userAddresses;
  }
};
