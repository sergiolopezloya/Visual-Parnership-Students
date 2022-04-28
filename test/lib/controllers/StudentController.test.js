const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentController", () => {
    test("Debe extraer todos los estudiantes", () => {
        const students = StudentController.getAllStudents();
        expect(students.length > 0).toBe(true);
    });

    test("Debe filtrar los estudiantes que tienen certificación", () => {
        const data = StudentController.getStudentsEmailWithCertification();
        expect(data.map(student => student.email).length > 0).toBe(true);
    });

    test("Debe filtrar los estudiantes que tienen más de 500 créditos", () => {
        const data = StudentController.getStudentsWithCredits(500);
        expect(data.filter(student => student.credits >= 500).length > 0).toBe(true);
    });
});