const { DeviceService } = require('../../services')

const Task = function (task) {
    this.task = task.task
}

Task.getDeviceBy = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await DeviceService.getDeviceBy(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})

Task.getDeviceById = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await DeviceService.getDeviceById(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})
Task.updateDeviceById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await DeviceService.updateDeviceById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.insertDevice = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await DeviceService.insertDevice(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.deleteDeviceById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await DeviceService.deleteDeviceById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})


module.exports = Task