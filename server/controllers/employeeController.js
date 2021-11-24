const {sequelize} = require('../sequelize')
const bcrypt = require('bcrypt')
module.exports = {
  register: async (req, res) => {
    const {username, password, firstName, lastName} = req.body
    const checkUsername = await sequelize.query(`SELECT * FROM employee WHERE username = '${username}'`)
    if(checkUsername[1].rowCount !== 0) {
      res.status(500).send("Username already exists")
    } else {
    const salt = bcrypt.genSaltSync(5)
    const passwordHash = bcrypt.hashSync(password, salt)
    console.log(passwordHash)
    await sequelize.query(`
    INSERT INTO employee (first_name, last_name, username, password)
    VALUES (
      '${firstName}',
      '${lastName}',
      '${username}',
      '${passwordHash}'
    )`)
    const userInfo = await sequelize.query(`SELECT id, username, first_name FROM employee WHERE username = '${username}'`)
    res.status(200).send(userInfo)
    }
  },
  login: async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`SELECT * FROM employee WHERE username='${username}'`)
    if(validUser[1].rowCount === 1) {
      if(bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
          id: validUser[0][0].id,
          username: validUser[0][0].username ,
          name: validUser[0][0].first_name
        }
        return res.status(200).send(object)
      } else {
        return res.status(500).send("Incorrect Password")
      }
    } else {
      return res.status(500).send('Username and Password is Incorrect')
    }
  }
}