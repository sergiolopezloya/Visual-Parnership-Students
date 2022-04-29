const Reader = require("./../utils/reader");
const StudentService = require("./../services/StudentService");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return students;
    }

    static getStudentsEmailWithCertification() {
        const students = StudentController.getAllStudents();
        const studentsWithCertification = StudentService.filterByCertification(students);
        const studentsEmail = studentsWithCertification.map(student => student.email);
        return studentsEmail;
    }

    static getStudentsWithCredits(amount) {
        const students = StudentController.getAllStudents();
        const studentsWithCredits = StudentService.filterByCredits(students, amount);
        return studentsWithCredits;
    }
}

module.exports = StudentController;