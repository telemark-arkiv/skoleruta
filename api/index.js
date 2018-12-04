const { parse } = require('url')
const { send } = require('micro')
const data = require('../lib/skoleruta-data')
const generateSkoleruta = require('../lib/generate-skoleruta')
const isFuture = line => line.date >= line.today

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  const date = query && query.date ? new Date(query.date) : new Date()
  const skoleruta = data
    .map(line => Object.assign({}, line, { today: date }))
    .map(line => Object.assign({}, line, { date: new Date(line.date) }))
    .filter(isFuture)
  send(response, 200, generateSkoleruta(skoleruta))
}
