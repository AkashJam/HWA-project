const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
        'postgres://postgres:cucchiaio@localhost:5433/FalunTest'
    )
    // Production
    // const pg = require('pg')
    // pg.defaults.ssl = true
    // const db = new Sequelize(process.env.DATABASE_URL, {
    //   ssl: true,
    //   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    // })

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
    const User = db.define(
        'user', {
            name: DataTypes.STRING,
            bio: DataTypes.TEXT,
            emailId: DataTypes.STRING,
            userRole: DataTypes.STRING,
            // profilePicture: {
            //   type: DataTypes.STRING,
            //   allowNull: true,
            // },
        }, {
            underscored: true,
        }
    )
    const Area = db.define(
        'area', {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
        }, {
            underscored: true,
        }
    )
    const Service = db.define(
            'service', {
                name: DataTypes.STRING,
                description: DataTypes.TEXT,
            }, {
                underscored: true,
            }
        )
        // Creating the 1 -> N association between Areas and Services, UserService
        // More on association: https://sequelize.org/master/manual/assocs.html
    Area.hasMany(Service, { foreignKey: 'area_id' })
    Service.belongsToMany(User, { through: 'UserServices' })
    User.belongsToMany(Service, { through: 'UserServices' })
    db._tables = {
        User,
        Area,
        Service,
    }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
    const { User, Service, Area } = db._tables
        // Create Users
    const firstUser = await User.create({
        name: 'John Doe',
        bio: 'Surfing and Rock Music',
        emailId: 'johndoe@momail.com',
        userRole: 'Designer',
    })
    const secondUser = await User.create({
        name: 'Jane Doe',
        bio: 'Clubbing and Rock Climbing',
        emailId: 'janedoe@momail.com',
        userRole: 'Web Developer',
    })
    const service1 = await Service.create({
        name: 'Design & Development',
        description: 'Design and develop responsive and dynamic websites for your company',
    })
    const service2 = await Service.create({
        name: 'DevOps & Maintainance',
        description: 'Deployment and Database Maintainance for the website',
    })
    const area1 = await Area.create({
        name: 'Web Development',
        description: 'Handle the transistion of the company into the internet',
    })

    await service1.addUser(firstUser.id)
    await service1.addUser(secondUser.id)
    await service2.addUser(firstUser.id)
    await service2.addUser(secondUser.id)
    await area1.addService(service1.id)
    await area1.addService(service2.id)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
    // Call the function for the database structure definition
    defineDatabaseStructure()
        // Synchronize Sequelize with the actual database
    await db.sync({ force: true })
        // Call the function to insert some fake data
    await insertFakeData()
    return db
}

export default initializeDatabase
// module.exports = initializeDatabase