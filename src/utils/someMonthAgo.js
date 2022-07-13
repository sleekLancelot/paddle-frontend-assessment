export const monthAgo = ( offset = 1 ) => {
    var modDate = new Date();
    var m = modDate.getMonth();
    modDate.setMonth(modDate.getMonth() - offset)

    // If it's still in same month, set date to last day of previous month
    if (modDate.getMonth() === m) modDate.setDate(0)
    modDate.setHours(0, 0, 0, 0)

    return modDate
}