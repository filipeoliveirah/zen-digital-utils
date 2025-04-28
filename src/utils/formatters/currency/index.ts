export function formatCurrencyInput(value: string): string {
    let numberValue = value?.replace(/\D/g, '')

    if (!value || !numberValue) {
        return 'R$ 0,00'
    }

    numberValue = (Number.parseInt(numberValue) / 100).toFixed(2).toString()

    return `R$ ${numberValue
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

export function formatCurrency(value: number | string): string {
    if (value == null || value === '') {
        return 'R$ 0,00'
    }

    let numberValue = Number(value)
    if (Number.isNaN(numberValue)) {
        return 'R$ 0,00'
    }

    numberValue = Math.floor(numberValue * 100) / 100

    const formattedValue = numberValue
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    return `R$ ${formattedValue}`
}

/**
 * Formats a number with a custom currency symbol
 * @param value - The number or string to format
 * @param currencySymbol - The currency symbol to use (defaults to $)
 * @returns Formatted currency string
 */
export function formatWithCurrencySymbol(
    value: number | string,
    currencySymbol: string = '$'
): string {
    if (value == null || value === '') {
        return `${currencySymbol} 0.00`
    }

    let numberValue = Number(value)
    if (Number.isNaN(numberValue)) {
        return `${currencySymbol} 0.00`
    }

    numberValue = Math.floor(numberValue * 100) / 100

    const formattedValue = numberValue
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    return `${currencySymbol} ${formattedValue}`
}

/**
 * Formats a number as currency using internationalization API
 * @param value - The number to format
 * @param locale - The locale to use for formatting (defaults to 'pt-BR')
 * @param currencyCode - The ISO currency code (defaults to 'BRL')
 * @returns Formatted currency string
 */
export function formatInternationalCurrency(
    value: number | string,
    locale: string = 'pt-BR',
    currencyCode: string = 'BRL'
): string {
    if (value == null || value === '') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode
        }).format(0)
    }

    const numberValue = Number(value)
    if (Number.isNaN(numberValue)) {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode
        }).format(0)
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    }).format(numberValue)
}

/**
 * Formats a number as currency without the currency symbol
 * @param value - The number or string to format
 * @returns Formatted number string with decimal and thousands separators
 */
export function formatCurrencyWithoutSymbol(value: number | string): string {
    if (value == null || value === '') {
        return '0,00'
    }

    let numberValue = Number(value)
    if (Number.isNaN(numberValue)) {
        return '0,00'
    }

    numberValue = Math.floor(numberValue * 100) / 100

    return numberValue
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

/**
 * Formats a number as currency using accounting notation (negative values in parentheses)
 * @param value - The number or string to format
 * @returns Formatted currency string in accounting format
 */
export function formatAccountingCurrency(value: number | string): string {
    if (value == null || value === '') {
        return 'R$ 0,00'
    }

    let numberValue = Number(value)
    if (Number.isNaN(numberValue)) {
        return 'R$ 0,00'
    }

    numberValue = Math.floor(numberValue * 100) / 100
    
    const isNegative = numberValue < 0
    const absoluteValue = Math.abs(numberValue)
    
    const formattedValue = absoluteValue
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    
    return isNegative 
        ? `(R$ ${formattedValue})`
        : `R$ ${formattedValue}`
}

export function parseBrazilianCurrency(str: string) {
    // Remove qualquer caractere que não seja dígito, vírgula, ponto ou sinal de menos
    str = str.replace(/[^0-9,.-]+/g, '')
    // Remove os separadores de milhar (pontos)
    str = str.replace(/\./g, '')
    // Substitui a vírgula decimal por ponto
    str = str.replace(',', '.')
    // Converte a string em número decimal
    return Number.parseFloat(str)
}

/**
 * Converts a currency value to cents (integer)
 * @param value - The currency value as string or number
 * @returns Integer value in cents
 */
export function toCents(value: string | number): number {
    if (typeof value === 'string') {
        // Handle strings that may include currency formatting
        return Math.round(parseBrazilianCurrency(value) * 100)
    }
    
    return Math.round(Number(value) * 100)
}
