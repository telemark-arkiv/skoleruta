const data = require('../lib/skoleruta-data')
const isFuture = line => line.date >= line.today

module.exports = date => {
  const filterDate = date ? new Date(date) : new Date()
  return data
    .map(line => Object.assign({}, line, { today: filterDate }))
    .map(line => Object.assign({}, line, { date: new Date(line.date) }))
    .filter(isFuture)
}
