const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:24101997@localhost:5433/FalunTest'
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
      content: DataTypes.TEXT,
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
      content: DataTypes.TEXT,
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
    bio: 'My interests are Surfing and Rock Music. “You have gotta dance like there is nobody watching, Love like you will never be hurt, Sing like there is nobody listening, And live like it is heaven on earth” ― William W. Purkey',
    emailId: 'codeysheehan@momail.com',
    userRole: 'Web Designer',
    profilePicture:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
  })
  const secondUser = await User.create({
    name: 'Kyla Garza',
    bio: 'My interests are Clubbing and Rock Climbing. “I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell dont deserve me at my best” ― Marilyn Monroe',
    emailId: 'kylagarza@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://img.freepik.com/free-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?size=626&ext=jpg',
  })
  const thirdUser = await User.create({
    name: 'Joey White',
    bio: 'My interests are Reading and Wine Tasting. “Don’t walk in front of me… I may not follow. Do not walk behind me… I may not lead. Walk beside me… just be my friend” ― Albert Camus',
    emailId: 'joeywhite@momail.com',
    userRole: 'Data Scientist',
    profilePicture:
      'https://netstorage-tuko.akamaized.net/images/7837e1645580ee67.jpg?&imwidth=1200',
  })
  const fourthUser = await User.create({
    name: 'Joni Grant',
    bio: 'My interests are Netflix and Chill. “I haveve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou',
    emailId: 'jonigrant@momail.com',
    userRole: 'Hacker',
    profilePicture:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  })
  const fifthUser = await User.create({
    name: 'Marissa John',
    bio: 'My interests are Sailing and Swimming. “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ― Ralph Waldo Emerson',
    emailId: 'marissajohn@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://www.aero-mag.com/wp-content/uploads/2019/07/AMJuly19News-ametek1-e1563205327354-1024x1024.jpg',
  })
  const sixthUser = await User.create({
    name: 'Victor Clayton',
    bio: 'My interests are Dancing and Parkour. “Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” ― H. Jackson Brown Jr.',
    emailId: 'victorclayton@momail.com',
    userRole: 'Web Developer',
    profilePicture:
      'https://www.lifespan.org/sites/default/files/styles/media_card/public/2020-11/Lifespan-images-12_0.jpg?h=10d202d3&itok=34u2dgSw',
  })
  const seventhUser = await User.create({
    name: 'Ellesha Hodgson',
    bio: 'My interests are Indoor Climbing and Brewing Beers. “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ― Albert Einstein',
    emailId: 'elleshahodgson@momail.com',
    userRole: 'Web Designer',
    profilePicture:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
  })
  const eighthUser = await User.create({
    name: 'Hal Truong',
    bio: 'My interests are traveling and food. “Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ― Neil Gaiman',
    emailId: 'haltruong@momail.com',
    userRole: 'Hacker',
    profilePicture:
      'https://media.istockphoto.com/photos/portrait-of-casual-smiling-man-picture-id1138562953?k=6&m=1138562953&s=612x612&w=0&h=FzSLV-RtbFTz7z_VCbmuSCfEWpd4kYbnPxZ5d_mdDgg=',
  })
  const ninthUser = await User.create({
    name: 'Barney Jackson',
    bio: 'My interests are football and long distance riding. “It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.” ― Maurice Switzer',
    emailId: 'barneyjackson@momail.com',
    userRole: 'Data Scientist',
    profilePicture:
      'https://ak.picdn.net/shutterstock/videos/4862444/thumb/1.jpg',
  })
  const tenthUser = await User.create({
    name: 'Megan Barry',
    bio: 'My interests are Poetry and Drawing. “The opposite of love is not hate, it is indifference. The opposite of art is not ugliness, it is indifference. The opposite of faith is not heresy, it is indifference. And the opposite of life is not death, it is indifference.” ― Elie Wiesel',
    emailId: 'meganbarry@momail.com',
    userRole: 'Database Administrator',
    profilePicture: 'https://ukrainer.net/wp-content/uploads/2019/11/43.jpg',
  })
  const eleventhUser = await User.create({
    name: 'Shawn Mccabe',
    bio: 'My interests are Scuba Diving and Gardening. “I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.” ― Albert Einstein',
    emailId: 'shawnmccabe@momail.com',
    userRole: 'Machine Learning Engineer',
    profilePicture:
      'https://ak.picdn.net/shutterstock/videos/24960599/thumb/1.jpg',
  })
  const twelvethUser = await User.create({
    name: 'Virginia H. Oswalt',
    bio: 'My interests are guitar and music. "Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
    emailId: 'virginiaoswalt@momail.com',
    userRole: 'CEO Web Development Area',
    profilePicture:
      'https://images.idgesg.net/images/article/2020/01/women-in-it_daphne-jones-100828118-large.jpg',
  })
  const thirteenthUser = await User.create({
    name: 'Frank D. Stepp',
    bio: 'My interests are chess and online gaming. "Life is what happens when you are busy making other plans." -John Lennon',
    emailId: 'frankstepp@momail.com',
    userRole: 'CEO Big Data & Analytics Area',
    profilePicture:
      'https://dentelle.co.uk/wp-content/uploads/2016/02/botox-for-men.jpg',
  })
  const fourteenthUser = await User.create({
    name: 'Alexander Simpson',
    bio: 'My interests are volleyball and home brewing. "In the end, it is not the years in your life that count. It is the life in your years." -Abraham Lincoln',
    emailId: 'alexandersimpson@momail.com',
    userRole: 'CEO Machine Learning Area',
    profilePicture:
      'https://images.vanityfair.it/wp-content/uploads/2021/02/05152837/GettyImages-1186179742-4.jpg',
  })
  const fifthteenthUser = await User.create({
    name: 'Louis Hill',
    bio: 'My interests are art and architecture. "In three words I can sum up everything I have learned about life: it goes on." -Robert Frost',
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
    content:
      'Engineering a relationship with the customer is a delicate art form. Trust, confidence, affinity, familiarity, and beauty are all essential to consider, and they all are seen in your Internet frontdoor: your website. From major government transportation and infrastructure, food and beverage, financial institutions, consumer packaged goods, electronics, and more, Falun has been the architect of websites large and small. We focus on web appearence from any stage of the company lifecycle. Whether startup or corporate spin-off, new product release, or enterprise refresh, we’ve built beautiful websites.',
  })
  const service2 = await Service.create({
    name: 'DevOps & Maintainance',
    description: 'Deployment and Database Maintainance for websitew',
    image:
      'https://d210waafu5nnsw.cloudfront.net/fad1ff76-801d-4adb-be70-9ddfacfeda88/images/u086a4ff5217_original_opt.jpeg',
    content:
      'DevOps is an essential part of any system. DevOps helps to plan the architecture for deployment of any product by which it can be available and accessible to the target audience. It’s an ongoing process, making possible continuous deployment of new features and updates on the system to keep it aligned with a business roadmap. Falun with DevOps helps in creating a product with a hybrid solution and taking the best of each technology.',
  })
  const service3 = await Service.create({
    name: 'Dashboards',
    description:
      'Creating beautiful and insightful dashboards for your enterprise',
    image: 'https://blog.trello.com/hs-fs/DashboardFinal.png',
    content:
      'Identify patterns in your data with sophisticated visualizations. No coding needed. Data is generated at an ever-accelerating pace. If you want to leverage your data to make timely and effective decisions, you need a tool that enables you to quickly generate insight. With the Analytics Dashboards service you can drag and drop data onto the canvas and use various visualizations to communicate comparisons or understand relationships and trends in the data. With this service, you can quickly build visualizations to answer important questions or provide the foundation for more in-depth analysis.',
  })
  const service4 = await Service.create({
    name: 'Recommender Systems',
    description:
      'Provide intelligent recommendations to users based on their interests and actions',
    image:
      'https://ourcodeworld.com/public-media/articles/articleocw-5e02cb556727f.webp',
    content:
      'We provide recommender engine that drives you forward. Increase your customer satisfaction and spending with AI powered recommendations. Applicable to your home page, product detail, emailing campaigns and much more. We personalize content with highly versatile and scalable solution. Building on our vast experience from various domains and site sizes, we write our own algorithms to fit clients needs.',
  })
  const service5 = await Service.create({
    name: 'Trend Analysis',
    description:
      'Analyze market trends to create strategies and for development and marketing',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKGC74fg7x9rF7akCp9qhHG6LjeZd8I2gAiyKJxrQlbrf8IicevCan93lh-aeIof37qM&usqp=CAU',
    content:
      'The sheer amount and variety of existing and new data generated in the world today are unprecedented. As this growth continues, so do the opportunities for organizations to use their data to create Change that Matters. Falun Trend Analysis helps clients identify and capture the most value and meaningful insights from data, and turn them into competitive advantages. Our global teams of consultants and leading data scientists, engineers, and analysts—including people from cutting-edge analytics firms and understand underlying industry economics, customer needs, and competitive dynamics. We deliver insight and impact for clients through a wide range of flexible support models, providing ad hoc, deeply transformational, and ongoing analytics architecture and solutions. Importantly, we are fully technology agnostic and able to work with our clients preferred technologies and platforms. Once the tools and models are implemented, we focus on building and transferring capabilities and skills to ensure that analytics becomes a sustained competitive advantage.',
  })
  const service6 = await Service.create({
    name: 'Network Security',
    description:
      'Secure private information using firewalls and restrictive code syntax',
    image:
      'https://data-science-blog.com/wp-content/uploads/2020/01/ecommerce-1030x597.jpg',
    content:
      'We have gained a wide range of skills in the various areas of cyber security, and we are able to offer strategic support in the definition, design and implementation of processes, structures and systems necessary to improve the security positioning of our partners. We support our customers towards the preparation of a "Privacy System" adequate to the characteristics of the reference reality and maintainable over time, applying the provisions of the new European Regulation GDPR (General Data Protection Regulation, or European Regulation on data protection - EU Regulation 2016 / 679) and by Legislative Decree. 196/2003. The approach followed by ICTC implements the Privacy by Design paradigm, recognizing the importance of integrating data protection and privacy considerations within the operations of an organization. We are able to guide our customers in the definition and design of Disaster Recovery and Business Continuity solutions, thanks to our experience in the development of processes and architectures capable of maximizing the resilience of services',
  })
  const area1 = await Area.create({
    name: 'Web Development',
    description: 'Handle the transistion of the company into the internet',
    image:
      'https://manofy.com/wp-content/uploads/2020/05/website-development.jpg',
    content:
      'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development. Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding. Web development use content management systems to make content changes easier and available with basic technical skills. Web development teams consist of people who follow standard methods like Agile methodologies while developing Web sites. It is a collaborative effort between departments rather than the domain of a designated department. We offer three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer. Front-end developers are responsible for behaviour and visuals that run in the user browser, while back-end developers deal with the servers.',
  })
  const area2 = await Area.create({
    name: 'Big Data & Analytics',
    description: 'Visualize and interpretate your data efficiently',
    image:
      'https://www.b-fast.it/wp-content/uploads/2020/05/come-monitorare-gli-eventi-personalizzati-di-google-analytics-in-wordpress.jpg',
    content:
      'We know how to separate the signal from the noise. Data, analytics and AI are opening the door to new possibilities for how organizations can grow and differentiate themselves against competition at an accelerated pace. As the C-suite looks for ways to improve utilization and efficiency, unlock new revenue streams and have the ability (and agility) to create new business models, all paths to value share a common denominator… data. More than half (52%) of the organizations with future-ready operations are already using data and analytics at scale. Reinventing how data and AI initiatives are executed against business strategy results in an organization that can realize a return on investment at speed and ultimately build the case to move from AI pilots to enterprise-wide business transformation. With Data-driven Reinvention, data at its core becomes the ultimate competitive asset and differentiator, and by scaling AI with cloud, organizations can reposition their offerings, extend capabilities and improve data and AI maturity to create new sources of value and sustainable growth.',
  })
  const area3 = await Area.create({
    name: 'Machine Learning',
    description: 'Research the latest technology and automate decision making',
    image:
      'https://toolboxcoworking.com/uploads/_1240xAUTO_resize_center-center_90_none/machine-learning-cybersecurity-applications.png',
    content:
      'Machine learning is the study of computer algorithms that improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks. A subset of machine learning is closely related to computational statistics, which focuses on making predictions using computers; but not all machine learning is statistical learning. The study of mathematical optimization delivers methods, theory and application domains to the field of machine learning. Data mining is a related field of study, focusing on exploratory data analysis through unsupervised learning. In its application across business problems, machine learning is also referred to as predictive analytics usiness problems, it is also referred to as predictive analytics.',
  })
  const area4 = await Area.create({
    name: 'Cyber Security',
    description: 'Protects your information from online threats',
    image: 'https://www.spegea.it/wp-content/uploads/2020/11/Cybersecurity.jpg',
    content:
      'Make every part of your business more resilient. As your business ecosystem and value chain expand, we work to increase your resilience against cyber threats. Anytime. Anywhere. We create cybersecurity tailored to your specific business needs. We defend against cyberattacks with proactive, focused, industry-relevant threat intelligence to give you the confidence that comes from knowing your business is secure.',
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
