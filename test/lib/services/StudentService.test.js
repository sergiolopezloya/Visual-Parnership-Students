const StudentService = require("../../../lib/services/StudentService");
const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentService", () => {
    test("Filtrar estudiantes con certificacion", () => {
        const students = StudentController.getAllStudents();
        const data = StudentService.filterByCertificationEmail(students);
        expect(data.length).toBe(29);
    });
});