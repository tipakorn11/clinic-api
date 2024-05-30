// Models/base/room.service.js
const { PatientManagementModel } = require("../../models")

const Task = function (task) {
  this.task = task.task
}

Task.getPatientManagementBy = (data, connection) => PatientManagementModel.getPatientManagementBy(data, connection)
Task.getPatientManagementById = (data, connection) => PatientManagementModel.getPatientManagementById(data, connection)
Task.insertPatientManagement = (data, connection) => PatientManagementModel.insertPatientManagement(data, connection)
Task.updatePatientManagementById = (data, connection) => PatientManagementModel.updatePatientManagementById(data, connection)
Task.deletePatientManagementById = (data, connection) => PatientManagementModel.deletePatientManagementById(data, connection)
module.exports = Task
