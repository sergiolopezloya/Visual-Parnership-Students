class StudentService {
    static filterByCertification(students) {
        const studentsWithCertification = students.filter(student => student.haveCertification === true);
        return studentsWithCertification;
    }
}

module.exports = StudentService;