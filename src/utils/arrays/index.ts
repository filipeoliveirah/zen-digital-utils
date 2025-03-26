/**
 * Splits an array into chunks of a specified size
 * @param array - The array to split into chunks
 * @param size - The size of each chunk
 * @returns Array of array chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (size <= 0) return [array];

    const result: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}

/**
 * Removes duplicate values from an array
 * @param array - The array to remove duplicates from
 * @returns Array with unique values
 */
export function unique<T>(array: T[]): T[] {
    if (!Array.isArray(array)) return [];

    return [...new Set(array)];
}

/**
 * Sorts an array of objects by a specified property
 * @param array - The array of objects to sort
 * @param key - The property to sort by
 * @param direction - Sort direction: 'asc' (default) or 'desc'
 * @returns Sorted array
 */
export function sortBy<T extends Record<string, any>>(
    array: T[],
    key: keyof T,
    direction: 'asc' | 'desc' = 'asc'
): T[] {
    if (!Array.isArray(array) || array.length === 0) return [];

    const sorted = [...array].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];

        // Handle string comparison
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return valueA.localeCompare(valueB);
        }

        // Handle number comparison
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });

    // Reverse array if descending order is requested
    return direction === 'desc' ? sorted.reverse() : sorted;
}

/**
 * Groups an array of objects by a specified property
 * @param array - The array of objects to group
 * @param key - The property to group by
 * @returns Object with groups
 */
export function groupBy<T extends Record<string, any>, K extends keyof T>(
    array: T[],
    key: K
): Record<string, T[]> {
    if (!Array.isArray(array)) return {};

    return array.reduce((result, item) => {
        const groupKey = String(item[key]);
        result[groupKey] = result[groupKey] || [];
        result[groupKey].push(item);
        return result;
    }, {} as Record<string, T[]>);
}

/**
 * Flattens a nested array structure by one level
 * @param array - The array to flatten
 * @returns Flattened array
 */
export function flatten<T>(array: Array<T | T[]>): T[] {
    if (!Array.isArray(array)) return [];

    return array.reduce((result: T[], item) => {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
        return result;
    }, []);
}

/**
 * Returns an array containing elements present in all provided arrays
 * @param arrays - Arrays to find common elements from
 * @returns Array of common elements
 */
export function intersection<T>(...arrays: T[][]): T[] {
    if (!arrays.length || arrays.some(arr => !Array.isArray(arr))) return [];

    const [first, ...rest] = arrays;
    return first.filter(item =>
        rest.every(arr => arr.includes(item))
    );
}

/**
 * Returns elements from the first array that are not in the second array
 * @param array - The source array
 * @param excludeArray - The array of values to exclude
 * @returns Array with excluded values removed
 */
export function difference<T>(array: T[], excludeArray: T[]): T[] {
    if (!Array.isArray(array)) return [];
    if (!Array.isArray(excludeArray)) return [...array];

    return array.filter(item => !excludeArray.includes(item));
}

/**
 * Randomly shuffles elements in an array (Fisher-Yates algorithm)
 * @param array - The array to shuffle
 * @returns New shuffled array
 */
export function shuffle<T>(array: T[]): T[] {
    if (!Array.isArray(array)) return [];

    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

/**
 * Divides an array into two groups based on a predicate function
 * @param array - The array to divide
 * @param predicate - Function that returns true or false for each element
 * @returns Array containing two subarrays: matches and non-matches
 */
export function partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
    if (!Array.isArray(array)) return [[], []];

    return array.reduce(
        (result, item) => {
            result[predicate(item) ? 0 : 1].push(item);
            return result;
        },
        [[], []] as [T[], T[]]
    );
}