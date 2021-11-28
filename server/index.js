const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const {sequelize, connect} = require('./sequelize')
const eCtrl = require('./controllers/employeeController')
const dCtrl = require('./controllers/dataController')

// * Middleware
app.use(express.json())
app.use(cors())
// app.use(express.static(path.resolve(__dirname, "../build")))

// * Endpoints
app.post('/employee', eCtrl.register)
app.post('/login', eCtrl.login)
app.get('/projects', dCtrl.getProjects)
app.post('/clockIn', dCtrl.clockIn)
app.post('/clockOut', dCtrl.clockOut)

// * SSR
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

// * Test Sequelize connection
sequelize.connect

// * Connection to Port

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));