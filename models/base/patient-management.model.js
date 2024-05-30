const db = require("../../configs/db.json")
const Task = function (task) {
  this.task = task.task
  this.status = task.status
  this.created_at = new Date()
}
Task.getPatientManagementBy = function getPatientManagementBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
                SELECT * 
                FROM ${db["base"]}.tb_patient_management as tb1 LEFT JOIN  tb_patient_registration as tb2 
                ON tb1.patient_id = tb2.patient_id
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

Task.getPatientManagementById = function getPatientManagementById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT *
                FROM ${db["base"]}.tb_patient_management LEFT JOIN  tb_pateint_registration as tb2 
                ON tb1.patient_id = tb2.patient_id
                WHERE patient_id = ${connection.escape(data.patient)} 
                `
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.insertPatientManagement = function insertPatientManagement(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO ${db["base"]}.tb_patient_management SET
                patient_id = ${connection.escape(data.patient_id)},
                diagnosis = ${connection.escape(data.diagnosis)},
                treatment =  ${connection.escape(data.treatment)},
                doctor_name =  ${connection.escape(data.doctor_name)},
                notes =  ${connection.escape(data.notes)}
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

Task.updatePatientManagementById = function updatePatientManagementById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE  ${db["base"]}.tb_patient_management SET
                  diagnosis = ${connection.escape(data.diagnosis)},
                  treatment =  ${connection.escape(data.treatment)},
                  doctor_name =  ${connection.escape(data.doctor_name)},
                  notes =  ${connection.escape(data.notes)}`
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.deletePatientManagementById = function deletePatientManagementById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${db["base"]}.tb_patient_management WHERE management_id = ${connection.escape(data.management_id)}`
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
