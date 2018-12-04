const { parse } = require('url')
const data = require('../lib/skoleruta-data')
const isFuture = line => line.date >= line.today

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  const date = query && query.date ? new Date(query.date) : new Date()
  const skoleruta = data
    .map(line => Object.assign({}, line, { today: date }))
    .map(line => Object.assign({}, line, { date: new Date(line.date) }))
    .filter(isFuture)
  response.end(JSON.stringify(skoleruta))
}
