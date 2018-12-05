function renderDay (day) {
  return `
    <div>
      <span>${day.date}</span>
      <span>${day.title}</span>  
    </div>
  `
}

module.exports = ruta => `
<html lang="no">
  <head>
    <title>Skoleruta</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Skoleruta</h1>
    <div class="box">
      ${renderDay(ruta[0])}
    </div>
    ${ruta.map(renderDay)}
  </body>
</html>
`
