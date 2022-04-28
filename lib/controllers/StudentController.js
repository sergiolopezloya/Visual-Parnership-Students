const Reader = require("../utils/reader");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return students;
    }
}

module.exports = StudentController;