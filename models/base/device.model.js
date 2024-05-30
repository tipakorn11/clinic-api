const db = require("../../configs/db.json")
const { v4: uuidv4 } = require('uuid');

const Task = function (task) {
  this.task = task.task
  this.status = task.status
  this.created_at = new Date()
}
Task.getDeviceBy = function getDeviceBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
                SELECT * 
                FROM ${db["base"]}.tb_device AS tb_device LEFT JOIN ${db["base"]}.tb_customer AS tb_customer ON tb_customer.customer_id = tb_device.customer_id
                WHERE true `
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.getDeviceById = function getDeviceById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT *
                FROM ${db["base"]}.tb_device AS tb_device LEFT JOIN ${db["base"]}.tb_branch AS tb_branch ON tb_branch.branch_id = tb_device.branch_id
                WHERE device_id = ${connection.escape(data.device_id)} 
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

Task.insertDevice = function insertDevice(data, connection) {
  return new Promise((resolve, reject) => {
    let deviceID = uuidv4()
    let sql = `INSERT INTO ${db["base"]}.tb_device SET
                device_id = ${connection.escape(deviceID)},
                device_name = ${connection.escape(data.device_name)},
                device_status = ${connection.escape(data.device_status)},
                customer_id = ${connection.escape(data.customer_id)},
                update_by =  ${connection.escape(data.update_by)},
                update_date =  ${connection.escape(data.update_date)},
                create_by =  ${connection.escape(data.create_by)},
                create_date =  ${connection.escape(data.create_date)},
                Model =  ${connection.escape(data.Model)},
                brand =  ${connection.escape(data.brand)},
                size =  ${connection.escape(data.size)},
                sequence_id =  ${connection.escape(data.sequence_id)},
                branch_id =  ${connection.escape(data.branch_id)},
                base64 =  ${connection.escape(data.base64String)}
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

Task.updateDeviceById = function updateDeviceById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE ${db["base"]}.tb_device SET 
        device_name = ${connection.escape(data.device_name)},
        customer_id = ${connection.escape(data.customer_id)},
        device_status = ${connection.escape(data.device_status)},
        update_by =  ${connection.escape(data.update_by)},
        update_date =  ${connection.escape(data.update_date)},
        create_by =  ${connection.escape(data.create_by)},
        create_date =  ${connection.escape(data.create_date)},
        Model =  ${connection.escape(data.Model)},
        brand =  ${connection.escape(data.brand)},
        size =  ${connection.escape(data.size)},
        sequence_id =  ${connection.escape(data.sequence_id)},
        branch_id =  ${connection.escape(data.branch_id)},
        base64 =  ${connection.escape(data.base64String)}
        WHERE device_id = ${connection.escape(data.device_id)}`
    connection.query(sql, (err, res) => {
      if (err) {
        reject({ data: [], require: false, err: err })
      } else {
        resolve({ data: res, require: true })
      }
    })
  })
}

Task.deleteDeviceById = function deleteDeviceById(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${db["base"]}.tb_device WHERE device_id = ${connection.escape(data.device_id)}`
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
