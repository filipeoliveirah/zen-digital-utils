export function formatPhoneNumberForWhatsApp(value: string): string {
    const cleanValue = value.replace(/\D/g, '')

    return cleanValue
}

export function formatNumber(value: string): string {
    value = value.replace(/\D/g, '')
    return value
}

export function formatPhoneNumber(value: string): string {
    if (!value) {
        return ''
    }

    const valueWithoutMask = value.replace(/\D/g, '')
    const maxLength = 11
    const limitedValue = valueWithoutMask.slice(0, maxLength)

    if (limitedValue.length > 10) {
        return limitedValue.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }

    if (limitedValue.length > 6) {
        return limitedValue.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }

    if (limitedValue.length > 2) {
        return limitedValue.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    }

    return limitedValue.replace(/^(\d{0,2})/, '($1')
}


export function formatCountBankNumber(value: string): string {
    value = value.replace(/\D/g, '')
    value = value.slice(0, 13)

    if (value.length > 12) {
        value = value.replace(/(\d{13})/, '$1')
    }

    return value
}

export function formatBranchNumber(value: string): string {
    value = value.replace(/\D/g, '')
    value = value.slice(0, 5)

    if (value.length > 4) {
        value = value.replace(/(\d{4})(\d)/, '$1-$2')
    }

    return value
}

export function formatBranchNumberWithDefault(value: string): string {
    value = value.replace(/\D/g, '')
    if (value.length === 4) {
        value += '0'
    }
    value = value.slice(0, 5)
    if (value.length > 4) {
        value = value.replace(/(\d{4})(\d)/, '$1-$2')
    }
    return value
}

export function formatCpf(value: string): string {
    // Remove non-digit characters and limit to 11 digits
    value = value.replace(/\D/g, '').slice(0, 11)

    // Insert the first dot after the initial three digits
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    // Insert the second dot after the next three digits
    value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    // Add the dash before the last two digits
    value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4')

    return value
}
