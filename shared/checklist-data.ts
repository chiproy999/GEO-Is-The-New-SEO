export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'geo' | 'maps' | 'technical';
}

export const checklistData: ChecklistItem[] = [
  // GEO Optimization Tasks
  {
    id: 'geo-conversational',
    title: 'Convert content to conversational tone',
    description: 'Rewrite key pages using natural language and question-based headings',
    category: 'geo'
  },
  {
    id: 'geo-authority',
    title: 'Add statistics and expert quotes',
    description: 'Include credible sources, data, and authority signals in content',
    category: 'geo'
  },
  {
    id: 'geo-faq',
    title: 'Create FAQ sections',
    description: 'Develop comprehensive Q&A content for common customer questions',
    category: 'geo'
  },
  {
    id: 'geo-query-optimization',
    title: 'Optimize for query types',
    description: 'Tailor content for transactional, informational, and navigational queries',
    category: 'geo'
  },
  {
    id: 'geo-backlinks',
    title: 'Build authoritative backlinks',
    description: 'Secure high-quality links from trusted sources in your industry',
    category: 'geo'
  },
  {
    id: 'geo-testing',
    title: 'Test content on AI platforms',
    description: 'Query ChatGPT, Claude, Gemini with relevant searches to test visibility',
    category: 'geo'
  },
  
  // Google Maps Optimization Tasks
  {
    id: 'maps-profile',
    title: 'Complete Google Business Profile',
    description: 'Fill out all fields including NAP, hours, categories, and attributes',
    category: 'maps'
  },
  {
    id: 'maps-photos',
    title: 'Upload high-quality photos',
    description: 'Add interior, exterior, product, and team photos regularly',
    category: 'maps'
  },
  {
    id: 'maps-reviews',
    title: 'Encourage customer reviews',
    description: 'Implement review generation strategy and respond to all reviews',
    category: 'maps'
  },
  {
    id: 'maps-citations',
    title: 'Build local citations',
    description: 'Ensure consistent NAP across directories and local websites',
    category: 'maps'
  },
  {
    id: 'maps-posts',
    title: 'Post regular updates',
    description: 'Use Google Posts to share news, offers, and business updates',
    category: 'maps'
  },
  {
    id: 'maps-qa',
    title: 'Manage Q&A section',
    description: 'Proactively answer common questions and monitor user submissions',
    category: 'maps'
  },
  
  // Technical Implementation Tasks
  {
    id: 'tech-faq-schema',
    title: 'Implement FAQ Schema',
    description: 'Add JSON-LD structured data for frequently asked questions',
    category: 'technical'
  },
  {
    id: 'tech-org-schema',
    title: 'Add Organization Schema',
    description: 'Implement site-wide organization markup with company details',
    category: 'technical'
  },
  {
    id: 'tech-local-schema',
    title: 'Set up LocalBusiness Schema',
    description: 'Add structured data for business hours, location, and contact info',
    category: 'technical'
  },
  {
    id: 'tech-llms-txt',
    title: 'Create llms.txt file',
    description: 'Add standardized AI-readable information file to domain root',
    category: 'technical'
  },
  {
    id: 'tech-validation',
    title: 'Validate structured data',
    description: 'Test markup using Google Rich Results Test and Schema validator',
    category: 'technical'
  },
  {
    id: 'tech-tracking',
    title: 'Set up AI traffic tracking',
    description: 'Configure Google Analytics to monitor referrals from AI platforms',
    category: 'technical'
  }
];

export const getChecklistItemsByCategory = (category: 'geo' | 'maps' | 'technical') => {
  return checklistData.filter(item => item.category === category);
};

export const getChecklistTotals = () => {
  const totals: { [category: string]: number } = {};
  checklistData.forEach(item => {
    totals[item.category] = (totals[item.category] || 0) + 1;
  });
  return totals;
};