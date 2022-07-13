export const formatNumber = (num) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' })

    return formatter.format(num) ?? ''
}