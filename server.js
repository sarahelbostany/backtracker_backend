const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const userRouters = require('./routes/userRoutes')
app.use('/users', userRouters)

const babyTrackerRouter = require('./routes/babyTrackerRoutes')
app.use('/babyTracker', babyTrackerRouter ) // is this supposed to be plural or singular


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`your server is listening`)
  routesReport.print()
})

//test
//test3
