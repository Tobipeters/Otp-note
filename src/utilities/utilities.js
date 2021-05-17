export const dateTimeFumc = (timeStamp, format = {
    strokeDate: "DD/MM/YYYY"
}) => {
    const date = new Date(timeStamp)
    console.log(date)
    const day = date.getDay
    const month = date.getMonth
    const year = date.getFullYear

    switch (format) {
        case format.strokeDate:
            return `${day}/${month}/${year}`
    }
    // return date
}