const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:akashjames@localhost:5432/FalunTest'
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
  Service.belongsTo(Area, { foreignKey: 'area_id' })
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
    name: 'Codey Sheehan',
    bio:
      'My interests are Surfing and Rock Music. “You have gotta dance like there is nobody watching, Love like you will never be hurt, Sing like there is nobody listening, And live like it is heaven on earth” ― William W. Purkey',
    emailId: 'codeysheehan@momail.com',
    userRole: 'Web Designer',
    profilePicture:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
  })
  const secondUser = await User.create({
    name: 'Kyla Garza',
    bio:
      'My interests are Clubbing and Rock Climbing. “I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell dont deserve me at my best” ― Marilyn Monroe',
    emailId: 'kylagarza@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://img.freepik.com/free-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?size=626&ext=jpg',
  })
  const thirdUser = await User.create({
    name: 'Joey White',
    bio:
      'My interests are Reading and Wine Tasting. “Don’t walk in front of me… I may not follow. Do not walk behind me… I may not lead. Walk beside me… just be my friend” ― Albert Camus',
    emailId: 'joeywhite@momail.com',
    userRole: 'Data Scientist',
    profilePicture:
      'https://netstorage-tuko.akamaized.net/images/7837e1645580ee67.jpg?&imwidth=1200',
  })
  const fourthUser = await User.create({
    name: 'Joni Grant',
    bio:
      'My interests are Netflix and Chill. “I haveve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou',
    emailId: 'jonigrant@momail.com',
    userRole: 'Hacker',
    profilePicture:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  })
  const fifthUser = await User.create({
    name: 'Marissa John',
    bio:
      'My interests are Sailing and Swimming. “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ― Ralph Waldo Emerson',
    emailId: 'marissajohn@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://www.aero-mag.com/wp-content/uploads/2019/07/AMJuly19News-ametek1-e1563205327354-1024x1024.jpg',
  })
  const sixthUser = await User.create({
    name: 'Victor Clayton',
    bio:
      'My interests are Dancing and Parkour. “Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” ― H. Jackson Brown Jr.',
    emailId: 'victorclayton@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://www.lifespan.org/sites/default/files/styles/media_card/public/2020-11/Lifespan-images-12_0.jpg?h=10d202d3&itok=34u2dgSw',
  })
  const seventhUser = await User.create({
    name: 'Ellesha Hodgson',
    bio:
      'My interests are Indoor Climbing and Brewing Beers. “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ― Albert Einstein',
    emailId: 'elleshahodgson@momail.com',
    userRole: 'Web Designer',
    profilePicture:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
  })
  const eighthUser = await User.create({
    name: 'Hal Truong',
    bio:
      'My interests are traveling and food. “Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ― Neil Gaiman',
    emailId: 'haltruong@momail.com',
    userRole: 'Hacker',
    profilePicture:
      'https://media.istockphoto.com/photos/portrait-of-casual-smiling-man-picture-id1138562953?k=6&m=1138562953&s=612x612&w=0&h=FzSLV-RtbFTz7z_VCbmuSCfEWpd4kYbnPxZ5d_mdDgg=',
  })
  const ninthUser = await User.create({
    name: 'Barney Jackson',
    bio:
      'My interests are football and long distance riding. “It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.” ― Maurice Switzer',
    emailId: 'barneyjackson@momail.com',
    userRole: 'Data Scientist',
    profilePicture:
      'https://ak.picdn.net/shutterstock/videos/4862444/thumb/1.jpg',
  })
  const tenthUser = await User.create({
    name: 'Megan Barry',
    bio:
      'My interests are Poetry and Drawing. “The opposite of love is not hate, it is indifference. The opposite of art is not ugliness, it is indifference. The opposite of faith is not heresy, it is indifference. And the opposite of life is not death, it is indifference.” ― Elie Wiesel',
    emailId: 'meganbarry@momail.com',
    userRole: 'Database Administrator',
    profilePicture: 'https://ukrainer.net/wp-content/uploads/2019/11/43.jpg',
  })
  const eleventhUser = await User.create({
    name: 'Shawn Mccabe',
    bio:
      'My interests are Scuba Diving and Gardening. “I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.” ― Albert Einstein',
    emailId: 'shawnmccabe@momail.com',
    userRole: 'Machine Learning Engineer',
    profilePicture:
      'https://ak.picdn.net/shutterstock/videos/24960599/thumb/1.jpg',
  })
  const twelvethUser = await User.create({
    name: 'Virginia H. Oswalt',
    bio:
      'My interests are guitar and music. "Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
    emailId: 'virginiaoswalt@momail.com',
    userRole: 'CEO Web Development Area',
    profilePicture:
      'https://images.idgesg.net/images/article/2020/01/women-in-it_daphne-jones-100828118-large.jpg',
  })
  const thirteenthUser = await User.create({
    name: 'Frank D. Stepp',
    bio:
      'My interests are chess and online gaming. "Life is what happens when you are busy making other plans." -John Lennon',
    emailId: 'frankstepp@momail.com',
    userRole: 'CEO Big Data & Analytics Area',
    profilePicture:
      'https://dentelle.co.uk/wp-content/uploads/2016/02/botox-for-men.jpg',
  })
  const fourteenthUser = await User.create({
    name: 'Alexander Simpson',
    bio:
      'My interests are volleyball and home brewing. "In the end, it is not the years in your life that count. It is the life in your years." -Abraham Lincoln',
    emailId: 'alexandersimpson@momail.com',
    userRole: 'CEO Machine Learning Area',
    profilePicture:
      'https://images.vanityfair.it/wp-content/uploads/2021/02/05152837/GettyImages-1186179742-4.jpg',
  })
  const fifthteenthUser = await User.create({
    name: 'Louis Hill',
    bio:
      'My interests are art and architecture. "In three words I can sum up everything I have learned about life: it goes on." -Robert Frost',
    emailId: 'louishill@momail.com',
    userRole: 'CEO Cyber Security Area',
    profilePicture:
      'https://www.mantruckandbus.com/fileadmin/_processed_/b/e/csm_Elektrobatterien_Johannes_OEhl_a793651366.jpg',
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
    description: 'Deployment and Database Maintainance for websitew',
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
  const service5 = await Service.create({
    name: 'Trend Analysis',
    description:
      'Analyze market trends to create strategies and for development and marketing',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKGC74fg7x9rF7akCp9qhHG6LjeZd8I2gAiyKJxrQlbrf8IicevCan93lh-aeIof37qM&usqp=CAU',
  })
  const service6 = await Service.create({
    name: 'Network Security',
    description:
      'Secure private information using firewalls and restrictive code syntax',
    image:
      'https://data-science-blog.com/wp-content/uploads/2020/01/ecommerce-1030x597.jpg',
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
    name: 'Machine Learning',
    description: 'Research the latest technology and automate decision making',
    image:
      'https://toolboxcoworking.com/uploads/_1240xAUTO_resize_center-center_90_none/machine-learning-cybersecurity-applications.png',
  })
  const area4 = await Area.create({
    name: 'Cyber Security',
    description: 'Protects your information from online threats',
    image: 'https://www.spegea.it/wp-content/uploads/2020/11/Cybersecurity.jpg',
  })

  await service1.addUser(firstUser.id)
  await service1.addUser(secondUser.id)
  await service1.addUser(sixthUser.id)
  await service1.addUser(seventhUser.id)
  await service1.addUser(twelvethUser.id)
  await service2.addUser(tenthUser.id)
  await service2.addUser(secondUser.id)
  await service2.addUser(sixthUser.id)
  await service2.addUser(seventhUser.id)
  await service2.addUser(twelvethUser.id)
  await service3.addUser(secondUser.id)
  await service3.addUser(firstUser.id)
  await service3.addUser(thirdUser.id)
  await service3.addUser(fifthUser.id)
  await service3.addUser(tenthUser.id)
  await service4.addUser(thirdUser.id)
  await service4.addUser(ninthUser.id)
  await service4.addUser(tenthUser.id)
  await service4.addUser(eleventhUser.id)
  await service4.addUser(fourteenthUser.id)
  await service5.addUser(thirdUser.id)
  await service5.addUser(ninthUser.id)
  await service5.addUser(eleventhUser.id)
  await service5.addUser(thirteenthUser.id)
  await service6.addUser(fourthUser.id)
  await service6.addUser(eighthUser.id)
  await service6.addUser(fifthteenthUser.id)
  await area1.addService(service1.id)
  await area1.addService(service2.id)
  await area2.addService(service3.id)
  await area2.addService(service5.id)
  await area3.addService(service3.id)
  await area3.addService(service4.id)
  await area4.addService(service6.id)
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
