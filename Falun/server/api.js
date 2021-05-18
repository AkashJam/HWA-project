import initializeDatabase from './DB/db-conn'

const express = require('express')
    // const initializeDatabase = require('./DB/db-conn')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        name: 'John Doe',
    })
})

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
    // Call the init function that returns the Database
    const db = await initializeDatabase()
        // Let's extract all the objects we need to perform queries inside the endpoints
    const { User, Service, Area } = db._tables
        // API to get all the articles
    app.get('/user', async(req, res) => {
            const users = await User.findAll()
            return res.json(users)
        })
        // API to get an users by ID.
        // This one will return also the comments
    app.get('/user/:id', async(req, res) => {
        const { id } = req.params
        const user = await User.findOne({
            where: { id },
            include: { model: Service },
        })
        return res.json(user)
    })
    app.get('/areas', async(req, res) => {
        const areas = await Area.findAll()
        return res.json(areas)
    })
    app.get('/services', async(req, res) => {
        const services = await Service.findAll()
        return res.json(services)
    })
}

init()

export default app