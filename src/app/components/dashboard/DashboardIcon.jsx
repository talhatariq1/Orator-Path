'use client';

import React from 'react';
import { getIconData, getSvgProps } from '../../styles/dashboard/design-system/icon-utils';
import iconManifest from '../../styles/dashboard/design-system/icon-manifest.json';

/**
 * DashboardIcon component for displaying SVG icons from the design system
 * 
 * @param {Object} props
 * @param {string} props.icon - Icon ID from the manifest
 * @param {string|number} props.size - Icon size ('small', 'default', 'large', 'extraLarge') or custom number
 * @param {string} props.color - Override color for the icon
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @returns {JSX.Element|null} - SVG Icon or null if icon not found
 */
const DashboardIcon = ({ icon, size = 'default', color, className = '', style = {}, ...rest }) => {
  const [iconSvg, setIconSvg] = React.useState(null);
  const iconData = getIconData(icon);
  
  React.useEffect(() => {
    if (!iconData) return;
    
    // Dynamic import of SVG as React component
    import(`../../styles/dashboard/design-system/icons/${iconData.filename}`)
      .then((module) => {
        setIconSvg(module.default);
      })
      .catch((error) => {
        console.error(`Failed to load icon: ${icon}`, error);
      });
  }, [icon, iconData]);

  if (!iconData) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  // Generate SVG props based on manifest
  const svgProps = getSvgProps(icon, size, color);
  const combinedStyle = { ...style };
  
  // Handle numeric sizes
  if (typeof size === 'number') {
    combinedStyle.width = `${size}px`;
    combinedStyle.height = `${size}px`;
  } else {
    const numericSize = iconManifest.iconSize[size] || iconManifest.iconSize.default;
    combinedStyle.width = `${numericSize}px`;
    combinedStyle.height = `${numericSize}px`;
  }

  // Render the icon if loaded
  if (iconSvg) {
    const IconComponent = iconSvg;
    return (
      <IconComponent
        className={`dashboard-icon ${className}`}
        style={combinedStyle}
        role="img"
        aria-label={iconData.description}
        {...svgProps}
        {...rest}
      />
    );
  }

  // Return placeholder while loading
  return (
    <div 
      className={`dashboard-icon-placeholder ${className}`}
      style={{
        ...combinedStyle,
        display: 'inline-block'
      }}
      {...rest}
    />
  );
};

/**
 * Component for displaying a collection of icons together
 */
export const IconGrid = ({ 
  icons = [], 
  size = 'default',
  onIconClick,
  className = ''
}) => {
  return (
    <div className={`dashboard-icon-grid ${className}`}>
      {icons.map((iconId) => (
        <div 
          key={iconId}
          className="dashboard-icon-grid-item"
          onClick={() => onIconClick && onIconClick(iconId)}
        >
          <DashboardIcon 
            icon={iconId} 
            size={size} 
          />
          <span className="dashboard-icon-grid-label">{iconId}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardIcon;
