const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentController", () => {
    test("Debe extraer todos los estudiantes", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });

    test("Debe filtrar los estudiantes que tienen certificación", () => {
        const students = StudentController.getAllStudents();
        const data = StudentController.getStudentsEmailWithCertification(students);
        expect(data.length).toBe(29);
    });
});