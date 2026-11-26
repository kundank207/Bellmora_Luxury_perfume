import { orderService } from './orderService';

export const trackingService = {
  async trackOrder(query) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!query || !query.trim()) {
      throw new Error('Please enter a demo Order Reference ID or associated customer Email.');
    }

    const clean = query.trim().toUpperCase();
    const orders = await orderService.getAllOrders();

    // Match by ID
    let found = orders.find((o) => o.id.toUpperCase() === clean);

    // Or match by tracking number
    if (!found) {
      found = orders.find((o) => o.trackingNumber?.toUpperCase() === clean);
    }

    // Or match by email
    if (!found) {
      found = orders.find((o) => o.customer?.email?.toUpperCase() === query.trim().toUpperCase());
    }

    // Or match by phone
    if (!found) {
      const cleanPhone = query.replace(/\D/g, '');
      if (cleanPhone.length >= 6) {
        found = orders.find((o) => o.customer?.phone?.replace(/\D/g, '').includes(cleanPhone));
      }
    }

    if (!found) {
      throw new Error(`No demonstration order found matching "${query}". You can try seeded sample IDs: AUR-89241, AUR-92318, or AUR-95104.`);
    }

    return found;
  }
};
