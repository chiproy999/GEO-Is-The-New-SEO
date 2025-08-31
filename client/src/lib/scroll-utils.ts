/**
 * Smoothly scrolls to an element by ID, accounting for fixed header offset
 * @param elementId - The ID of the target element (without #)
 * @param offset - Additional offset from the top (default: 80px for header + padding)
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Navigation target "${elementId}" not found. Available sections:`, 
        Array.from(document.querySelectorAll('section[id]')).map(el => el.id)
      );
    }
    return;
  }

  // Use the browser's native scroll-margin-top if available, otherwise calculate manually
  try {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  } catch (error) {
    // Fallback for older browsers
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - offset);
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Gets the current scroll position with header offset consideration
 */
export const getScrollOffset = (): number => {
  return window.pageYOffset + 80; // Account for header height
};

/**
 * Checks if an element is currently in view (considering header offset)
 */
export const isElementInView = (elementId: string, offset: number = 80): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const headerHeight = offset;
  
  return (
    rect.top >= headerHeight &&
    rect.bottom <= window.innerHeight
  );
};

/**
 * Gets the currently visible section (for active navigation highlighting)
 */
export const getCurrentSection = (): string | null => {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const headerHeight = 100; // Slightly more than the offset to account for scrolling
  
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom > headerHeight) {
      return section.id;
    }
  }
  
  return null;
};

/**
 * Debug function to test all navigation links
 */
export const debugNavigation = (): void => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const expectedSections = [
    'overview', 'what-is-geo', 'geo-strategies', 'platforms', 
    'maps-ranking', 'technical', 'measurement', 'checklist'
  ];
  
  const foundSections = Array.from(document.querySelectorAll('section[id]')).map(el => el.id);
  const missingSections = expectedSections.filter(id => !foundSections.includes(id));
  const extraSections = foundSections.filter(id => !expectedSections.includes(id));
  
  console.group('🔍 Navigation Debug Report');
  console.log('✅ Found sections:', foundSections);
  if (missingSections.length > 0) {
    console.warn('❌ Missing sections:', missingSections);
  }
  if (extraSections.length > 0) {
    console.info('ℹ️ Extra sections:', extraSections);
  }
  console.log('📏 Current scroll position:', window.pageYOffset);
  console.log('🎯 Currently visible section:', getCurrentSection());
  console.groupEnd();
};