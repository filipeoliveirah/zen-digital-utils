export function formattedDate(thisDate: string) {
    const dateParts = thisDate.split('-')
    const date = new Date(`${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function formatBirthdate(value: string): string {
    const digits = value.replace(/\D/g, '')
    const day = digits.slice(0, 2)
    const month = digits.slice(2, 4)
    const year = digits.slice(4, 8)

    let formatted = ''

    if (day)
        formatted += day
    if (month)
        formatted += `/${month}`
    if (year)
        formatted += `/${year}`

    return formatted
}

export function formatDateTime(dateTimeString: string) {
    const [date, time] = dateTimeString.split(' ')
    return `${date} • ${time}`
  }