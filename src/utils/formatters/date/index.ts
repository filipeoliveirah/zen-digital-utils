// --------------------------------------
// Basic Date Formatting
// --------------------------------------

/**
 * Converts a date string in 'YYYY-MM-DD' format to 'DD/MM/YYYY' format
 * @param thisDate - Date string in 'YYYY-MM-DD' format
 * @returns Formatted date string in 'DD/MM/YYYY' format
 */
export function formattedDate(thisDate: string): string {
    if (!thisDate) return '';

    try {
        const dateParts = thisDate.split('-');
        const date = new Date(`${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`);

        if (isNaN(date.getTime())) return '';

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    } catch (error) {
        return '';
    }
}

/**
 * Formats a date according to the specified format string
 * @param date - The date to format
 * @param format - Format string (e.g., 'YYYY-MM-DD', 'DD/MM/YYYY')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format: string = 'DD/MM/YYYY'): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return '';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format
        .replace('YYYY', year.toString())
        .replace('MM', month)
        .replace('DD', day);
}

/**
 * Formats a datetime string by separating date and time with a bullet point
 * @param dateTimeString - String containing date and time separated by space
 * @returns Formatted date and time string
 */
export function formatDateTime(dateTimeString: string): string {
    if (!dateTimeString) return '';

    const parts = dateTimeString.split(' ');
    if (parts.length !== 2) return dateTimeString;

    const [date, time] = parts;
    return `${date} • ${time}`;
}

// --------------------------------------
// Special Date Formatting
// --------------------------------------

/**
 * Formats a string as a birthdate (DD/MM/YYYY)
 * @param value - String to format as birthdate
 * @returns Formatted birthdate string
 */
export function formatBirthdate(value: string): string {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');
    const day = digits.slice(0, 2);
    const month = digits.slice(2, 4);
    const year = digits.slice(4, 8);

    let formatted = '';

    if (day) {
        formatted += day;
    }
    if (month) {
        formatted += `/${month}`;
    }
    if (year) {
        formatted += `/${year}`;
    }

    return formatted;
}

// --------------------------------------
// Date Calculations
// --------------------------------------

/**
 * Calculates the number of days between two dates
 * @param startDate - The first date
 * @param endDate - The second date
 * @returns The number of days between the two dates (absolute value)
 */
export function getDaysBetween(startDate: Date, endDate: Date): number {
    if (!(startDate instanceof Date) || !(endDate instanceof Date) ||
        isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return 0;
    }

    // Reset time component to ensure we're only counting full days
    const start = new Date(startDate.setHours(0, 0, 0, 0));
    const end = new Date(endDate.setHours(0, 0, 0, 0));

    // Calculate difference in milliseconds
    const diffTime = Math.abs(end.getTime() - start.getTime());

    // Convert to days and return
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// --------------------------------------
// Date Validation & Checking
// --------------------------------------

/**
 * Checks if a date falls on a weekend (Saturday or Sunday)
 * @param date - The date to check
 * @returns True if the date is a weekend, false otherwise
 */
export function isWeekend(date: Date): boolean {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return false;
    }

    const day = date.getDay();

    // 0 is Sunday, 6 is Saturday
    return day === 0 || day === 6;
}