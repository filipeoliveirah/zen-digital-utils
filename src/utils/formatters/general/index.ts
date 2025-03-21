export function formatPercent(value: number | string): string {
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
  
    return `${formattedValue}`
  }
  
  export function formatFullName(value: string): string {
    return value
      .replace(/[^a-záãéêíóõúç\s]/gi, '')
      .replace(/\s+/g, ' ')
  }
  
  export function formatTextOnly(value: string): string {
    // eslint-disable-next-line regexp/no-obscure-range
    return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
  }
  
  export function formatZipCode(value: string): string {
    value = value.replace(/\D/g, '')
  
    value = value.slice(0, 8)
  
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2')
    }
  
    return value
  }
  
  export function capitalizeText(text: string): string {
    if (!text)
      return ''
  
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }
  
  export function getAcronym(fullName: string): string {
    if (!fullName)
      return ''
  
    const names = fullName.trim().split(' ')
  
    const firstInitial = names[0][0].toUpperCase()
    const secondInitial = names[1] ? names[1][0].toUpperCase() : ''
  
    return firstInitial + secondInitial
  }