const { parse } = require('url')
const { send } = require('micro')
const generateSkoleruta = require('../lib/generate-skoleruta')

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  send(response, 200, generateSkoleruta(query.date))
}
