const db = require("../../configs/db.json")
const Task = function (task) {
  this.task = task.task
  this.status = task.status
  this.created_at = new Date()
}
Task.getPatientRegisterBy = function getPatientRegisterBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
                SELECT * 
                FROM ${db["base"]}.tb_patient_registration AS tb_patient 
                WHERE TRUE
                limit 10 `
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.getPatientRegisterById = function getPatientRegisterById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT *
                FROM ${db["base"]}.tb_patient_registration 
                WHERE patient_id = ${connection.escape(data.patient_id)} 
                `
                console.log(sql);
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.insertPatientRegister = function insertPatientRegister(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO ${db["base"]}.tb_patient_registration SET
                first_name = ${connection.escape(data.first_name)},
                last_name = ${connection.escape(data.last_name)},
                gender = ${connection.escape(data.gender)},
                date_of_birth =  ${connection.escape(data.date_of_birth)},
                phone_number =  ${connection.escape(data.phone_number)},
                email =  ${connection.escape(data.create_by)}
            `
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: { insertId: res.insertId }, require: true })
      }
    })
  })
}

Task.updatePatientRegisterById = function updatePatientRegisterById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE  ${db["base"]}.tb_patient_registration SET
                first_name = ${connection.escape(data.first_name)},
                last_name = ${connection.escape(data.last_name)},
                gender = ${connection.escape(data.gender)},
                date_of_birth =  ${connection.escape(data.date_of_birth)},
                phone_number =  ${connection.escape(data.phone_number)},
                email =  ${connection.escape(data.email)}
                WHERE patient_id = ${connection.escape(data.patient_id)}`
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.deletePatientRegisterById = function deletePatientRegisterById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${db["base"]}.tb_patient_registration WHERE patient_id = ${connection.escape(data.patient_id)}`
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

module.exports = Task
