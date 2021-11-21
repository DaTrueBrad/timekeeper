const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const {sequelize, connect} = require('./sequelize')

// * Middleware
app.use(express.json())
app.use(cors())
// app.use(express.static(path.resolve(__dirname, "../build")))

// * Endpoints

// * SSR
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// * Test Sequelize connection
sequelize.connect

// * Connection to Port

const { PORT } = process.env || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));