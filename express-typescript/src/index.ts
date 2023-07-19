import express from 'express'
const app = express()

app.use(express.json())

const PORT = 7770

app.get('/betacode', (_req, res) => {
  console.log("Hola mundo")

  res.send('betacode')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo ${PORT} `);
})