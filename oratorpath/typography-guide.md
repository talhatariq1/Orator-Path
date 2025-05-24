# Typography Guide for Orator Path

This guide provides step-by-step instructions on how to update and modify typography in your Orator Path project.

## Currently Configured Fonts

- **Headlines and Headings**: Cinzel Decorative
- **Body Text**: Noto Serif
- **Monospace Text**: Geist Mono

## How to Add a New Font

### 1. Acquire Font Files

- Download the font files (TTF, WOFF, WOFF2 formats) for your desired font.
- Place them in the `public/fonts` directory.

### 2. Update Font CSS

Add the @font-face declaration in `public/fonts/fonts.css`:

```css
@font-face {
  font-family: 'YourFontName';
  src: url('/fonts/YourFontName.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### 3. Register with Next.js

Open `src/app/layout.js` and add the new font:

```javascript
// Import localFont if not already imported
import localFont from 'next/font/local';

// Define your font
const yourFont = localFont({
  src: '../../public/fonts/YourFontName.ttf',
  variable: '--font-your-font-name',
  display: 'swap',
});

// Add it to the className in the body tag
// Find the body tag and add yourFont.variable to the className string
```

### 4. Update CSS Variables

In `src/app/globals.css`, add utility classes for your new font:

```css
@layer base {
  .font-your-class-name {
    font-family: var(--font-your-font-name, 'YourFontName', fallback-type);
  }
}
```

### 5. Update Tailwind Configuration

In `tailwind.config.mjs`, add your font to the fontFamily section:

```javascript
fontFamily: {
  // existing fonts...
  yourFontName: ['var(--font-your-font-name)', 'YourFontName', 'fallback-type'],
},
```

## How to Change Existing Typography

### To Change Heading Font

1. Update the font files in `public/fonts`
2. Modify the `font-heading` class in `globals.css`
3. Update the `heading` entry in Tailwind config

### To Change Body Font

1. Update the font files in `public/fonts`
2. Modify the `font-body` and `html, body` selectors in `globals.css`
3. Update the `sans` entry in Tailwind config

## Using Typography Classes in Your Components

### Using Cinzel Decorative for Headings

```jsx
// In JSX
<h1 className="font-cinzel-decorative text-4xl">Headline Text</h1>
<div className="font-heading">Another Heading</div>
```

### Using Noto Serif for Body Text

```jsx
// In JSX
<p className="font-noto-serif">Body text in Noto Serif</p>
<div className="font-sans">Also Noto Serif (default body text)</div>
```

### Using Original Fonts (if needed)

```jsx
// In JSX
<h1 className="font-nathan">Text in Nathan font</h1>
<p className="font-courier">Text in Courier New</p>
```

## Typography Best Practices

1. **Consistency**: Use Cinzel Decorative for headlines and important headings, Noto Serif for body text.
2. **Hierarchy**: Maintain a clear visual hierarchy with font sizes and weights.
3. **Readability**: Ensure text remains readable across different devices and screen sizes.
4. **Performance**: Use font subsetting when possible to reduce file sizes.

## Troubleshooting Common Issues

### Font Not Loading

- Verify font file paths are correct.
- Check that font files are in the correct format.
- Ensure the font is correctly registered in layout.js.

### Font Looks Different Than Expected

- Clear your browser cache.
- Verify font weight and style settings.
- Check for any CSS overrides.

### FOUT (Flash of Unstyled Text)

- Use the `font-display: swap` property (already configured).
- Consider using font preloading for critical fonts.

## Need More Help?

If you need additional assistance with typography in your project, consider:

1. Reviewing Next.js font documentation
2. Checking Tailwind CSS typography documentation
3. Using browser developer tools to debug font issues
