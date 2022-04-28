const StudentController = require("../../../lib/controllers/StudentController");

describe("StudentController", () => {
    test("Debe extraer todos los estudiantes", () => {
        const data = StudentController.getAllStudents();
        expect(data.length).toBe(51);
    });
});