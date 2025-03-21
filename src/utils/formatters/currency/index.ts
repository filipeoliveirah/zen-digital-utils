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
