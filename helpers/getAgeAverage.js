const getAgeAverage = {
  getAge: date => {
    let formattedDate = new Date(date)
    let diff_ms = Date.now() - formattedDate.getTime()
    let age_dt = new Date(diff_ms)
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  },
  getAverage: ages => {
    let avg = ages.reduce((a, b) => a + b) / ages.length
    let roundAvg = (Math.round(avg * 100) / 100).toFixed(2)
    return roundAvg
  },
}

module.exports = getAgeAverage
