const WISHLIST_STORAGE_KEY = 'aura_demo_wishlist';

export const wishlistService = {
  getWishlist() {
    try {
      const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  saveWishlist(items) {
    const safeItems = Array.isArray(items) ? items : [];
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(safeItems));
    window.dispatchEvent(new CustomEvent('aura-wishlist-updated', { detail: safeItems }));
  },

  isInWishlist(productId) {
    const items = this.getWishlist();
    return items.some((item) => item.id === productId);
  },

  toggleWishlist(product) {
    const items = this.getWishlist();
    const existingIndex = items.findIndex((i) => i.id === product.id);

    let updated;
    let added = false;
    if (existingIndex > -1) {
      updated = items.filter((i) => i.id !== product.id);
      added = false;
    } else {
      updated = [
        ...items,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          comparePrice: product.comparePrice,
          fragranceFamily: product.fragranceFamily,
          image: (product.images && product.images[0]) || '',
          collectionTitle: product.collectionTitle,
          addedAt: new Date().toISOString()
        }
      ];
      added = true;
    }

    this.saveWishlist(updated);
    return { added, items: updated };
  },

  removeFromWishlist(productId) {
    const items = this.getWishlist().filter((i) => i.id !== productId);
    this.saveWishlist(items);
    return items;
  },

  clearWishlist() {
    localStorage.removeItem(WISHLIST_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('aura-wishlist-updated', { detail: [] }));
  }
};
