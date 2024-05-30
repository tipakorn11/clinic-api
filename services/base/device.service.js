// Models/base/room.service.js
const { DeviceModel } = require("../../models")

const Task = function (task) {
  this.task = task.task
}

Task.getDeviceBy = (data, connection) => DeviceModel.getDeviceBy(data, connection)
Task.getDeviceById = (data, connection) => DeviceModel.getDeviceById(data, connection)
Task.insertDevice = (data, connection) => DeviceModel.insertDevice(data, connection)
Task.updateDeviceById = (data, connection) => DeviceModel.updateDeviceById(data, connection)
Task.deleteDeviceById = (data, connection) => DeviceModel.deleteDeviceById(data, connection)
module.exports = Task
