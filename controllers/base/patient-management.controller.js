const { PatientManagementService } = require('../../services')

const Task = function (task) {
    this.task = task.task
}

Task.getPatientManagementBy = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await PatientManagementService.getPatientManagementBy(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})

Task.getPatientManagementById = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await PatientManagementService.getPatientManagementById(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})
Task.updatePatientManagementById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientManagementService.updatePatientManagementById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.insertPatientManagement = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientManagementService.insertPatientManagement(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.deletePatientManagementById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientManagementService.deletePatientManagementById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})


module.exports = Task