const { PatientRegisterController,PatientManagementController } = require("../../controllers")

module.exports = function (app) {
  //PatientRegister
  app.get("/patient/getPatientRegisterBy", PatientRegisterController.getPatientRegisterBy)
  app.post("/patient/getPatientRegisterById", PatientRegisterController.getPatientRegisterById)
  app.put("/patient/insertPatientRegister", PatientRegisterController.insertPatientRegister)
  app.patch("/patient/updatePatientRegisterById", PatientRegisterController.updatePatientRegisterById)
  app.delete("/patient/deletePatientRegisterById", PatientRegisterController.deletePatientRegisterById)
  //deviceHistory

  app.get("/patient-management/getPatientManagementBy", PatientManagementController.getPatientManagementBy)
  app.post("/patient-management/getPatientManagementById", PatientManagementController.getPatientManagementById)
  app.put("/patient-management/insertPatientManagement", PatientManagementController.insertPatientManagement)
  app.patch("/patient-management/updatePatientManagementById", PatientManagementController.updatePatientManagementById)
  app.delete("/patient-management/deletePatientManagementById", PatientManagementController.deletePatientManagementById)
}
