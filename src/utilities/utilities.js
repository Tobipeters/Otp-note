export const dateTimeFumc = (timeStamp, format = {
    strokeDate: "DD/MM/YYYY"
}) => {
    const date = timeStamp
    console.log(date)
    let day = date.getDate()
    let month = date.getMonth() + 1
    const year = date.getFullYear()
    day = day < 10 ? `0${day}` : `${day}`
    month = month < 10 ? `0${month}` : `${month}`

    if (format.strokeDate) {
        // case format.strokeDate:
        return `${day}/${month}/${year}`
    }
    // return date
}