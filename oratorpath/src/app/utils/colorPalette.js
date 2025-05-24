// Dashboard color palette
export const colors = {
  // Primary colors
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  purple: {
    50: '#FAF5FF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#A855F7',
    600: '#9333EA',
    700: '#7E22CE',
    800: '#6B21A8',
    900: '#581C87',
    950: '#3B0764',
  },
  yellow: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308',
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
    950: '#422006',
  },
  
  // Neutral colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },
  
  // Background colors
  background: {
    primary: '#0F172A',    // Dark blue background
    secondary: '#1E293B',  // Slightly lighter blue
    tertiary: '#334155',   // Even lighter blue for cards
    card: '#1E293B',       // Card background
    highlight: '#2D3748',  // Highlight background
  },
  
  // Gradients
  gradients: {
    bluePurple: 'from-blue-600 to-purple-600',
    purpleBlue: 'from-purple-600 to-blue-600',
    blueYellow: 'from-blue-600 to-yellow-500',
    yellowBlue: 'from-yellow-500 to-blue-600',
    purpleYellow: 'from-purple-600 to-yellow-500',
    yellowPurple: 'from-yellow-500 to-purple-600',
  },
  
  // Status colors
  status: {
    success: '#10B981',    // Green
    warning: '#F59E0B',    // Amber
    error: '#EF4444',      // Red
    info: '#3B82F6',       // Blue
  }
};

// Widget theme configurations
export const widgetThemes = {
  blue: {
    background: 'bg-blue-900/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    heading: 'text-blue-300',
    icon: 'text-blue-400',
    accent: 'bg-blue-500',
    hover: 'hover:bg-blue-800/30',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-900/30',
    chart: '#3B82F6',
  },
  purple: {
    background: 'bg-purple-900/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    heading: 'text-purple-300',
    icon: 'text-purple-400',
    accent: 'bg-purple-500',
    hover: 'hover:bg-purple-800/30',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-purple-900/30',
    chart: '#A855F7',
  },
  yellow: {
    background: 'bg-yellow-900/10',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    heading: 'text-yellow-300',
    icon: 'text-yellow-400',
    accent: 'bg-yellow-500',
    hover: 'hover:bg-yellow-800/30',
    gradient: 'bg-gradient-to-br from-yellow-500/20 to-yellow-900/30',
    chart: '#EAB308',
  },
  mixed: {
    background: 'bg-gray-900/40',
    border: 'border-gray-700',
    text: 'text-gray-300',
    heading: 'text-white',
    icon: 'text-gray-400',
    accent: 'bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500',
    hover: 'hover:bg-gray-800/50',
    gradient: 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-yellow-900/20',
  }
};
