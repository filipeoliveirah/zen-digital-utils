/**
 * Deep merges two objects together
 * @param target - The target object to merge into
 * @param source - The source object to merge from
 * @returns A new object with properties from both objects deeply merged
 */
export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
    if (!target || typeof target !== 'object') return source as T & U;
    if (!source || typeof source !== 'object') return target as T & U;

    const output = { ...target } as Record<string, any>;

    Object.keys(source).forEach(key => {
        const targetValue = (target as Record<string, any>)[key];
        const sourceValue = (source as Record<string, any>)[key];

        if (
            Array.isArray(targetValue) &&
            Array.isArray(sourceValue)
        ) {
            output[key] = [...targetValue, ...sourceValue];
        } else if (
            targetValue &&
            typeof targetValue === 'object' &&
            sourceValue &&
            typeof sourceValue === 'object'
        ) {
            output[key] = deepMerge(targetValue, sourceValue);
        } else {
            output[key] = sourceValue !== undefined ? sourceValue : targetValue;
        }
    });

    return output as T & U;
}

/**
 * Creates a new object with only the specified properties
 * @param obj - The source object
 * @param keys - Array of keys to pick from the source object
 * @returns A new object with only the specified properties
 */
export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    if (!obj || typeof obj !== 'object') return {} as Pick<T, K>;

    return keys.reduce((result, key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
        return result;
    }, {} as Pick<T, K>);
}

/**
 * Creates a new object without the specified properties
 * @param obj - The source object
 * @param keys - Array of keys to omit from the source object
 * @returns A new object without the specified properties
 */
export function omit<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> {
    if (!obj || typeof obj !== 'object') return {} as Omit<T, K>;

    const result = { ...obj } as Record<string, any>;

    keys.forEach(key => {
        delete result[key as string];
    });

    return result as Omit<T, K>;
}