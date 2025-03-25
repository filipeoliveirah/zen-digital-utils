// --------------------------------------
// Text Formatting
// --------------------------------------

/**
 * Capitalizes the first letter of a string
 * @param text - The string to capitalize
 * @returns The string with first letter capitalized
 */
export function capitalize(text: string): string {
  if (!text || typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Capitalizes the first letter of each word in a string
 * @param text - The string to capitalize
 * @returns The string with each word capitalized
 */
export function capitalizeText(text: string): string {
  if (!text) return '';

  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Converts a string to a URL-friendly slug
 * @param text - The string to convert to a slug
 * @returns URL-friendly slug string
 */
export function slugify(text: string): string {
  if (!text || typeof text !== 'string') return '';

  return text
    .toString()
    .normalize('NFD')                // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')        // Remove non-word chars (except hyphens)
    .replace(/--+/g, '-')           // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '');       // Remove leading/trailing hyphens
}

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated
 * @param text - The string to truncate
 * @param length - Maximum length of the returned string (excluding suffix)
 * @param suffix - String to append if truncated (default: '...')
 * @returns Truncated string
 */
export function truncate(text: string, length: number, suffix: string = '...'): string {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= length) return text;

  return text.slice(0, length) + suffix;
}

/**
 * Removes all characters except letters and spaces
 * @param value - The string to format
 * @returns String with only letters and spaces
 */
export function formatTextOnly(value: string): string {
  if (!value) return '';
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

// --------------------------------------
// Name Formatting
// --------------------------------------

/**
 * Formats a full name by removing special characters and normalizing spaces
 * @param value - The full name to format
 * @returns Formatted full name
 */
export function formatFullName(value: string): string {
  if (!value) return '';
  return value
    .replace(/[^a-záãéêíóõúç\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Creates an acronym from a full name (first letter of first name and first letter of last name)
 * @param fullName - The full name to create an acronym from
 * @returns Two-letter acronym
 */
export function getAcronym(fullName: string): string {
  if (!fullName) return '';

  const names = fullName.trim().split(' ');

  const firstInitial = names[0] ? names[0][0].toUpperCase() : '';
  const secondInitial = names[1] ? names[1][0].toUpperCase() : '';

  return firstInitial + secondInitial;
}

// --------------------------------------
// Number and Currency Formatting
// --------------------------------------

/**
 * Formats a number as a percentage with two decimal places
 * @param value - The number or string to format
 * @returns Formatted percentage string
 */
export function formatPercent(value: number | string): string {
  if (value == null || value === '') {
    return '0,00%';
  }

  let numberValue = Number(value);
  if (Number.isNaN(numberValue)) {
    return '0,00%';
  }

  numberValue = Math.floor(numberValue * 100) / 100;

  const formattedValue = numberValue
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedValue}%`;
}

// --------------------------------------
// Address Formatting
// --------------------------------------

/**
 * Formats a string as a Brazilian ZIP code (CEP)
 * @param value - The string to format as a ZIP code
 * @returns Formatted ZIP code (format: 12345-678)
 */
export function formatZipCode(value: string): string {
  if (!value) return '';

  value = value.replace(/\D/g, '');
  value = value.slice(0, 8);

  if (value.length > 5) {
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
  }

  return value;
}