const {sequelize} = require('../sequelize')

module.exports = {
  getProjects: async (req, res) => {
    const allProjects = await sequelize.query(`SELECT * FROM projects`)
    res.status(200).send(allProjects)
  },
  clockIn: async (req, res) => {
    let {punch, project, user} = req.body
    await sequelize.query(`
    INSERT INTO time_punches (emp_id, project_id, punch_in)
    VALUES (${user}, ${project}, '${punch}')`)
    let data = await sequelize.query(`SELECT id FROM time_punches WHERE emp_id = ${user} AND punch_in = '${punch}'`)
    res.status(200).send(data)
  },
  clockOut: async (req, res) => {
    let {punch, project, user, id} = req.body
    await sequelize.query(`
    UPDATE time_punches SET punch_out = '${punch}'
    WHERE id = ${id}`)
    let data = await sequelize.query(`SELECT * FROM time_punches WHERE id = ${id}`)
    res.status(200).send(data)
  }
}