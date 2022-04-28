class StudentService {
    static filterByCertification(students) {
        const studentsWithCertification = students.filter(student => student.haveCertification === true);
        return studentsWithCertification;
    }

    static filterByCredits(students, amount) {
        const studentsWithCredits = students.filter(student => student.credits >= amount);
        return studentsWithCredits;
    }
}

module.exports = StudentService;