const StudentService = require("../../../lib/services/StudentService");
const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentService", () => {
    test("Filtrar estudiantes con certificacion", () => {
        const students = StudentController.getAllStudents();
        const data = StudentService.filterByCertification(students);
        expect(data.filter(student => student.haveCertification === true).length > 0).toBe(true);
    });

    test("Filtrar estudiantes con creditos", () => {
        const students = StudentController.getAllStudents();
        const data = StudentService.filterByCredits(students, 500);
        expect(data.filter(student => student.credits >= 500).length > 0).toBe(true);
    });
});