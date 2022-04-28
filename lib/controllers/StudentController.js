const Reader = require("../utils/reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return students;
    }

    static getStudentsEmailWithCertification() {
        const students = StudentController.getAllStudents();
        const studentsWithCertification = StudentService.filterByCertification(students);
        return studentsWithCertification;
    }
}

module.exports = StudentController;