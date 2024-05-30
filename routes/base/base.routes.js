const { DeviceController } = require("../../controllers")

module.exports = function (app) {
  //Device
  app.post("/device/getDeviceBy", DeviceController.getDeviceBy)
  app.post("/device/getDeviceById", DeviceController.getDeviceById)
  app.post("/device/insertDevice", DeviceController.insertDevice)
  app.post("/device/updateDeviceById", DeviceController.updateDeviceById)
  app.post("/device/deleteDeviceById", DeviceController.deleteDeviceById)
  //deviceHistory
}
