// Models/base/room.service.js
const { PatientRegisterModel } = require("../../models")

const Task = function (task) {
  this.task = task.task
}

Task.getPatientRegisterBy = (data, connection) => PatientRegisterModel.getPatientRegisterBy(data, connection)
Task.getPatientRegisterById = (data, connection) => PatientRegisterModel.getPatientRegisterById(data, connection)
Task.insertPatientRegister = (data, connection) => PatientRegisterModel.insertPatientRegister(data, connection)
Task.updatePatientRegisterById = (data, connection) => PatientRegisterModel.updatePatientRegisterById(data, connection)
Task.deletePatientRegisterById = (data, connection) => PatientRegisterModel.deletePatientRegisterById(data, connection)
module.exports = Task
