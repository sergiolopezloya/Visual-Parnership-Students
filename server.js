const StudentController = require("./lib/controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response) => {
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/certification", (request, response) => {
    const students = StudentController.getStudentsEmailWithCertification();
    response.json(students);
});

app.get("/v1/students/credits/:amount", (request, response) => {
    const amount = request.params.amount;
    const students = StudentController.getStudentsWithCredits(amount);
    response.json(students);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
