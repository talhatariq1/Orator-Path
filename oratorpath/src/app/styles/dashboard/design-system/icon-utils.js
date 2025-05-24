/**
 * Icon Utilities for Orator Path Dashboard
 * This file provides helper functions to work with the SVG icons defined in the manifest
 */

import iconManifest from './icon-manifest.json';

/**
 * Get the full path to an icon based on its ID
 * @param {string} iconId - The ID of the icon from the manifest
 * @returns {string} The full path to the icon
 */
export function getIconPath(iconId) {
  const icon = iconManifest.icons.find(icon => icon.id === iconId);
  return icon ? icon.path : null;
}

/**
 * Get complete icon data by ID
 * @param {string} iconId - The ID of the icon from the manifest
 * @returns {Object|null} The icon data object or null if not found
 */
export function getIconData(iconId) {
  return iconManifest.icons.find(icon => icon.id === iconId) || null;
}

/**
 * Get recommended color for an icon
 * @param {string} iconId - The ID of the icon from the manifest
 * @returns {string} CSS color variable reference
 */
export function getIconColor(iconId) {
  const icon = getIconData(iconId);
  if (!icon) return null;
  
  const colorKey = icon.recommendedColor;
  return iconManifest.colorVariants[colorKey] || null;
}

/**
 * Get all icons in a specific category
 * @param {string} category - The category name
 * @returns {Array} Array of icon objects in the category
 */
export function getIconsByCategory(category) {
  return iconManifest.icons.filter(icon => icon.category === category);
}

/**
 * Search for icons by keyword
 * @param {string} keyword - The keyword to search for
 * @returns {Array} Array of matching icon objects
 */
export function searchIcons(keyword) {
  const lowercaseKeyword = keyword.toLowerCase();
  return iconManifest.icons.filter(icon => {
    // Check if keyword appears in id, description or keywords
    return (
      icon.id.toLowerCase().includes(lowercaseKeyword) ||
      icon.description.toLowerCase().includes(lowercaseKeyword) ||
      icon.keywords.some(k => k.toLowerCase().includes(lowercaseKeyword))
    );
  });
}

/**
 * Get the correct size value for an icon
 * @param {string} size - Size key ('small', 'default', 'large', 'extraLarge') or numeric value
 * @returns {number} Size in pixels
 */
export function getIconSize(size) {
  if (typeof size === 'number') return size;
  
  return iconManifest.iconSize[size] || iconManifest.iconSize.default;
}

/**
 * Generate inline SVG props for React components
 * @param {string} iconId - The ID of the icon
 * @param {string|number} size - Size of the icon
 * @param {string} color - Override color (optional)
 * @returns {Object} Props object for SVG element
 */
export function getSvgProps(iconId, size = 'default', color) {
  const iconData = getIconData(iconId);
  if (!iconData) return {};
  
  const finalSize = getIconSize(size);
  const finalColor = color || getIconColor(iconId);
  
  return {
    width: finalSize,
    height: finalSize,
    fill: 'none', // SVGs are assumed to be stroke-based
    stroke: finalColor,
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: 'img',
    'aria-label': iconData.description,
  };
}

/**
 * Get a complete list of all available icons
 * @returns {Array} Array of all icon objects
 */
export function getAllIcons() {
  return [...iconManifest.icons];
}

/**
 * Get guideline for specific icon category
 * @param {string} category - Icon category
 * @returns {string} Usage guideline for the category
 */
export function getCategoryGuideline(category) {
  return iconManifest.guidelines[category] || '';
}

export default {
  getIconPath,
  getIconData,
  getIconColor,
  getIconsByCategory,
  searchIcons,
  getIconSize,
  getSvgProps,
  getAllIcons,
  getCategoryGuideline,
  manifest: iconManifest
};
