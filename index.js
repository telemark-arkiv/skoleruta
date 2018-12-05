const { parse } = require('url')
const { send } = require('micro')
const generateSkoleruta = require('./lib/generate-skoleruta')
const render = require('./lib/render-skoleruta')

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  const skoleruta = generateSkoleruta(query.date)
  send(response, 200, render(skoleruta))
}
