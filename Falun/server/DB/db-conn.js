const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:24101997@localhost:5432/FalunTest'
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
    'user',
    {
      name: DataTypes.STRING,
      bio: DataTypes.TEXT,
      emailId: DataTypes.STRING,
      userRole: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Service = db.define(
    'service',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
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
    profilePicture:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
  })
  const secondUser = await User.create({
    name: 'Jane Doe',
    bio: 'Clubbing and Rock Climbing',
    emailId: 'janedoe@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://img.freepik.com/free-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?size=626&ext=jpg',
  })
  const service1 = await Service.create({
    name: 'Design & Development',
    description:
      'Design and develop responsive and dynamic websites for your company',
    image:
      'https://www.studioideagrafica.it/wp-content/uploads/2016/08/la-figura-del-web-designer.jpg',
  })
  const service2 = await Service.create({
    name: 'DevOps & Maintainance',
    description: 'Deployment and Database Maintainance for the website',
    image:
      'https://d210waafu5nnsw.cloudfront.net/fad1ff76-801d-4adb-be70-9ddfacfeda88/images/u086a4ff5217_original_opt.jpeg',
  })
  const service3 = await Service.create({
    name: 'Dashboards',
    description:
      'Creating beautiful and insightful dashboards for your enterprise',
    image: 'https://blog.trello.com/hs-fs/DashboardFinal.png',
  })
  const service4 = await Service.create({
    name: 'Recommender Systems',
    description:
      'Provide intelligent recommendations to users based on their interests and actions',
    image:
      'https://ourcodeworld.com/public-media/articles/articleocw-5e02cb556727f.webp',
  })
  const area1 = await Area.create({
    name: 'Web Development',
    description: 'Handle the transistion of the company into the internet',
    image:
      'https://manofy.com/wp-content/uploads/2020/05/website-development.jpg',
  })
  const area2 = await Area.create({
    name: 'Big Data & Analytics',
    description: 'Visualize and interpretate your data efficiently',
    image:
      'https://www.b-fast.it/wp-content/uploads/2020/05/come-monitorare-gli-eventi-personalizzati-di-google-analytics-in-wordpress.jpg',
  })
  const area3 = await Area.create({
    name: 'Machine Learning/Blockchain',
    description: 'Research and development on the latest technology',
    image:
      'https://toolboxcoworking.com/uploads/_1240xAUTO_resize_center-center_90_none/machine-learning-cybersecurity-applications.png',
  })

  await service1.addUser(firstUser.id)
  await service1.addUser(secondUser.id)
  await service2.addUser(firstUser.id)
  await service2.addUser(secondUser.id)
  await service3.addUser(firstUser.id)
  await service4.addUser(firstUser.id)
  await area1.addService(service1.id)
  await area1.addService(service2.id)
  await area2.addService(service3.id)
  await area3.addService(service3.id)
  await area3.addService(service4.id)
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
