import { products } from '../data/products';

export const productService = {
  async getAllProducts() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [...products];
  },

  async getProductBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const found = products.find((p) => p.slug === slug);
    if (!found) throw new Error(`Fragrance "${slug}" not found in catalogue`);
    return { ...found };
  },

  async getProductById(id) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const found = products.find((p) => p.id === id);
    if (!found) throw new Error(`Fragrance ID "${id}" not found`);
    return { ...found };
  },

  async getFeaturedProducts() {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return products.filter((p) => p.isFeatured);
  },

  async getBestsellers() {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return products.filter((p) => p.isBestseller);
  },

  async getNewArrivals() {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return products.filter((p) => p.isNewArrival);
  },

  async getGiftSets() {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return products.filter((p) => p.isGiftSet);
  },

  async getRelatedProducts(relatedIds) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    if (!relatedIds || relatedIds.length === 0) return products.slice(0, 4);
    return products.filter((p) => relatedIds.includes(p.id));
  },

  async filterProducts({
    search = '',
    category = 'all',
    collectionType = 'all',
    fragranceFamily = 'all',
    occasion = 'all',
    minPrice = 0,
    maxPrice = 10000,
    intensity = 'all',
    sortBy = 'featured', // 'featured', 'price-asc', 'price-desc', 'newest', 'name'
    inStockOnly = false,
  } = {}) {
    await new Promise((resolve) => setTimeout(resolve, 250));

    let filtered = [...products];

    // Search query matching name, family, notes, description
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter((p) => {
        const inName = p.name.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inFamily = p.fragranceFamily.toLowerCase().includes(q);
        const inNotes = Object.values(p.notes).flat().some((n) => n.toLowerCase().includes(q));
        const inSubtitle = p.subtitle?.toLowerCase().includes(q);
        return inName || inDesc || inFamily || inNotes || inSubtitle;
      });
    }

    // Category / Gender
    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.category === category || p.category === 'unisex');
    }

    // Collection type
    if (collectionType && collectionType !== 'all') {
      if (collectionType === 'gift-sets') {
        filtered = filtered.filter((p) => p.isGiftSet);
      } else {
        filtered = filtered.filter((p) => p.collectionType === collectionType);
      }
    }

    // Fragrance Family
    if (fragranceFamily && fragranceFamily !== 'all') {
      filtered = filtered.filter((p) => p.fragranceFamily.toLowerCase() === fragranceFamily.toLowerCase());
    }

    // Occasion
    if (occasion && occasion !== 'all') {
      filtered = filtered.filter((p) => p.occasions && p.occasions.includes(occasion));
    }

    // Intensity
    if (intensity && intensity !== 'all') {
      filtered = filtered.filter((p) => p.intensity?.toLowerCase() === intensity.toLowerCase());
    }

    // Price range
    filtered = filtered.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Stock availability
    if (inStockOnly) {
      filtered = filtered.filter((p) => p.stockStatus === 'in_stock');
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'bestseller':
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      default:
        // featured default
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return filtered;
  },

  async matchFragranceFinder({ family, occasion, intensity, gender }) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const matchesFamily = (product) => {
      if (!family || family === 'any') return false;
      if (family !== 'Sweet') return product.fragranceFamily?.toLowerCase() === family.toLowerCase();

      const productDetails = [
        product.fragranceFamily,
        product.shortDescription,
        product.description,
        ...Object.values(product.notes || {}).flat(),
      ].join(' ').toLowerCase();
      return /\b(sweet|vanilla|tonka|cacao|chocolate|caramel|honey|praline|gourmand|sugar)\b/.test(productDetails);
    };
    const matchesOccasion = (product) => {
      if (!occasion || occasion === 'any') return false;
      const productOccasions = product.occasions || [];
      if (occasion === 'Daily Wear') return productOccasions.includes('Daily Wear') || productOccasions.includes('Everyday');
      if (occasion === 'Special Occasion') return productOccasions.some((value) => ['Wedding', 'Party'].includes(value));
      return productOccasions.includes(occasion);
    };
    const matchesIntensity = (product) => {
      if (!intensity || intensity === 'any') return false;
      const value = product.intensity?.toLowerCase() || '';
      if (intensity === 'Light') return value === 'light';
      if (intensity === 'Moderate') return value.includes('moderate');
      return value.includes('strong') || value.includes('intense');
    };

    return products
      .filter((product) => product.brand === 'BELLMORA LUXURY')
      .filter((product) => !gender || gender === 'any' || gender === 'No Preference' || product.category === gender.toLowerCase())
      .map((product) => {
        const reasons = [];
        if (matchesOccasion(product)) reasons.push(`${occasion === 'Daily Wear' ? 'daily wear' : occasion === 'Special Occasion' ? 'special occasions' : occasion.toLowerCase()} occasion`);
        if (matchesFamily(product)) reasons.push(`${product.fragranceFamily} scent profile${family === 'Sweet' ? ' with sweet notes' : ''}`);
        if (matchesIntensity(product)) reasons.push(`${product.intensity} intensity for your ${intensity.toLowerCase()} preference`);
        if (gender && gender !== 'any' && gender !== 'No Preference') reasons.push(`${gender.toLowerCase()} collection`);

        return {
          product,
          reasons,
          score: reasons.length,
        };
      })
      .filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score
        || Number(b.product.isBestseller) - Number(a.product.isBestseller)
        || Number(b.product.isFeatured) - Number(a.product.isFeatured)
        || a.product.name.localeCompare(b.product.name))
      .slice(0, 4);
  }
};
