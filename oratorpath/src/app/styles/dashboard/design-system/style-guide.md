# Orator Path Dashboard Design System

## Overview
This design system defines the core visual elements for the Orator Path dashboard. It establishes a professional, modern, and cohesive design language that helps users navigate and interact with the application effectively.

## Brand Colors

### Primary Palette
- **Primary Blue**: `#4C6DFF` - rgb(76, 109, 255)
  - Used for primary buttons, important UI elements, and interactive components
  - Hover: `#3A5CE8` - A slightly darker shade for hover states

- **Primary Purple**: `#8A3AEA` - rgb(138, 58, 234)
  - Used for highlights, accents, and secondary interactive elements
  - Hover: `#7328D6` - A slightly darker shade for hover states
  
- **Accent Cyan**: `#0EA5E9` - rgb(14, 165, 233)
  - Used for special elements, call-to-actions, and progress indicators
  - Hover: `#0B93D1` - A slightly darker shade for hover states

### Neutral Palette
- **Background**: `#F8FAFC` - rgb(248, 250, 252)
  - Primary background color for the dashboard
  
- **Card Background**: `#FFFFFF` - rgb(255, 255, 255)
  - Background for cards and contained elements
  
- **Surface/Secondary Background**: `#F1F5F9` - rgb(241, 245, 249)
  - Used for alternative backgrounds, hover states, and secondary elements
  
- **Border Color**: `#E2E8F0` - rgb(226, 232, 240)
  - Used for subtle separations, borders, and dividers

### Text Colors
- **Primary Text**: `#0F172A` - rgb(15, 23, 42)
  - Main text color for headings and important text
  
- **Secondary Text**: `#334155` - rgb(51, 65, 85)
  - Used for body text and descriptions
  
- **Tertiary Text**: `#64748B` - rgb(100, 116, 139)
  - Used for less important text, captions, and placeholders

### Semantic Colors
- **Success**: `#10B981` - rgb(16, 185, 129)
  - Used for success states, positive values
  
- **Warning**: `#F59E0B` - rgb(245, 158, 11)
  - Used for warnings, notifications requiring attention
  
- **Error**: `#EF4444` - rgb(239, 68, 68)
  - Used for error states, critical notifications
  
- **Info**: `#3B82F6` - rgb(59, 130, 246)
  - Used for informational content

## Typography

### Font Families
- **Headings**: Cinzel Decorative (var(--font-cinzel-decorative))
  - Used for page titles, section headings, and important labels
  
- **Body Text**: Noto Serif (var(--font-noto-serif))
  - Used for all body text, descriptions, and general content
  
- **Monospace**: Geist Mono (var(--font-geist-mono))
  - Used for code, metrics, and technical data

### Type Scale
- **Display**: 36px (2.25rem)
- **H1**: 30px (1.875rem)
- **H2**: 24px (1.5rem)
- **H3**: 20px (1.25rem)
- **H4**: 18px (1.125rem)
- **Body Large**: 16px (1rem)
- **Body Medium**: 14px (0.875rem)
- **Body Small**: 12px (0.75rem)
- **Caption**: 11px (0.6875rem)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System
The spacing system uses a 4px base unit for consistency.

- **4xs**: 2px (0.125rem)
- **3xs**: 4px (0.25rem)
- **2xs**: 8px (0.5rem)
- **xs**: 12px (0.75rem)
- **sm**: 16px (1rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 40px (2.5rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 80px (5rem)

## Border Radius
- **xs**: 2px (0.125rem)
- **sm**: 4px (0.25rem)
- **md**: 8px (0.5rem)
- **lg**: 12px (0.75rem)
- **xl**: 16px (1rem)
- **2xl**: 24px (1.5rem)
- **full**: 9999px (for pills and circular elements)

## Shadows
- **xs**: `0 1px 2px rgba(15, 23, 42, 0.05)`
- **sm**: `0 1px 3px rgba(15, 23, 42, 0.1), 0 1px 2px rgba(15, 23, 42, 0.06)`
- **md**: `0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)`
- **lg**: `0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)`
- **xl**: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)`
- **inner**: `inset 0 2px 4px rgba(15, 23, 42, 0.06)`
- **highlight**: `0 0 15px rgba(76, 109, 255, 0.4)`
- **glow**: `0 0 20px rgba(138, 58, 234, 0.5)`

## Components

### Buttons
- **Primary**: Background color using primary blue, white text, medium border radius
- **Secondary**: White background, primary blue text and border, medium border radius
- **Tertiary**: No background, primary blue text, no border, for less important actions
- **Ghost**: No background or border, only colored text, for minimal visual impact
- **Danger**: Red background for destructive actions

### Cards
- White background
- Light border
- Small to medium border radius
- Soft shadow
- Padding: 24px (1.5rem)
- Hover effect: subtle shadow increase, slight scaling or border highlight

### Form Elements
- **Text Inputs**: Light border, medium border radius, inner padding
- **Checkboxes/Radio**: Custom styled with brand colors
- **Dropdowns/Select**: Consistent with text inputs, custom dropdown icon
- **Focus States**: Blue outline or glow effect

### Status Indicators
- **Progress Bars**: Linear, with brand gradients
- **Badges**: Rounded pill design with semantic colors
- **Alerts**: Color-coded borders and backgrounds, with icons

### Navigation
- **Sidebar**: Darker background or frosted glass effect
- **Top Bar**: Light background with subtle shadow
- **Tabs**: Underline style with smooth transitions

### Data Visualization
- **Charts**: Brand color palette, consistent styling
- **Data Tables**: Clean rows, subtle hover states
- **Stats/Metrics**: Large numbers, subtle labels

### Interactions
- **Hover Effects**: Subtle scaling, shadow changes, or color shifts
- **Active States**: Slightly darkened colors
- **Focus States**: High-contrast outlines for accessibility
- **Loading States**: Branded spinners or progress indicators

## Accessibility
- Maintain WCAG 2.1 AA compliance
- Ensure sufficient color contrast (4.5:1 for normal text)
- Include focus indicators for keyboard navigation
- Design with screen readers in mind
- Test with accessibility tools

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - **sm**: 640px
  - **md**: 768px
  - **lg**: 1024px
  - **xl**: 1280px
  - **2xl**: 1536px

## Animation & Transitions
- Subtle and purposeful animations
- Default transition duration: 150-300ms
- Ease-in-out timing function for smoothness
- Reduce motion option for accessibility

## Icons
- Line style (stroked)
- 24px default size
- Consistent stroke width
- Primary, secondary, and tertiary colors based on importance
- Available in both filled and outlined versions when needed

## Implementation Notes
- Use Tailwind CSS utility classes whenever possible
- Leverage CSS variables for theming and consistency
- Create reusable components for common UI patterns
- Document component variations and usage guidelines
