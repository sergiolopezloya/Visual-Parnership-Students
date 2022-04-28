const StudentService = require("../../../lib/services/StudentService");
const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentService", () => {
    test("Filtrar estudiantes con certificacion", () => {
        const students = StudentController.getAllStudents();
        const data = StudentService.filterByCertification(students);
        expect(data.length > 0 && data[0].haveCertification == true).toBe(true);
    });

    test("Filtrar estudiantes con creditos", () => {
        const students = StudentController.getAllStudents();
        const data = StudentService.filterByCredits(students, 500);
        expect(data.length > 0 && data[0].credits >= 500).toBe(true);
    });
});