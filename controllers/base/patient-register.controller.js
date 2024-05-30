const { PatientRegisterService } = require('../../services')

const Task = function (task) {
    this.task = task.task
}

Task.getPatientRegisterBy = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await PatientRegisterService.getPatientRegisterBy(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})

Task.getPatientRegisterById = (req, res) => req.useConnection(async (connection, success, error) => {
    try {
        const result = await PatientRegisterService.getPatientRegisterById(req.body, connection)

        success(result)
    } catch (err) {
        error(err)
    }
})
Task.updatePatientRegisterById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientRegisterService.updatePatientRegisterById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.insertPatientRegister = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientRegisterService.insertPatientRegister(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})
Task.deletePatientRegisterById = (req, res) => req.useTransaction(async (connection, success, error) => {
    try {
        await PatientRegisterService.deletePatientRegisterById(req.body, connection)

        success()
    } catch (err) {
        error(err)
    }
})


module.exports = Task