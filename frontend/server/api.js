const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.json({
    name: 'John Doe',
  })
})

export default app
