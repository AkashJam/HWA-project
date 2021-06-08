import initializeDatabase from './DB/db-conn'

const express = require('express')
// const initializeDatabase = require('./DB/db-conn')

const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { User, Service, Area } = db._tables
  // API to get all the users
  app.get('/user', async (req, res) => {
    const users = await User.findAll()
    return res.json(users)
  })
  // API to get an user by ID.
  // This one will return also the services
  app.get('/user/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
      where: { id },
      include: { model: Service },
    })
    return res.json(user)
  })
  // API to get all the services
  app.get('/service', async (req, res) => {
    const services = await Service.findAll()
    return res.json(services)
  })
  // API to get a service by ID.
  // This one will return also the users
  app.get('/service/:id', async (req, res) => {
    const { id } = req.params
    const service = await Service.findOne({
      where: { id },
      include: { model: User },
    })
    return res.json(service)
  })
  // API to get all the areas
  app.get('/area', async (req, res) => {
    const services = await Area.findAll()
    return res.json(services)
  })
  // API to get an area by ID.
  // This one will return also the services
  app.get('/area/:id', async (req, res) => {
    const { id } = req.params
    const area = await Area.findOne({
      where: { id },
      include: { model: Service },
    })
    return res.json(area)
  })
}

init()

export default app
