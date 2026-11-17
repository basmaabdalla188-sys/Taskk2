// =====================================
// 1. Student Class & Constructor
// =====================================

class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // =====================================
    // 2. Calculate Average Using reduce()
    // =====================================

    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // =====================================
    // 3. Calculate Letter Grade
    // =====================================

    calculateGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // =====================================
    // 4. Check Final Result
    // =====================================

    getFinalResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// =====================================
// 5. Create Students Objects Array
// =====================================

const studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 95),
    new Student(102, "Sara", [45, 40, 50], 80),
    new Student(103, "Omar", [70, 75, 65], 90),
    new Student(104, "Mona", [40, 45, 48], 85)
];


// =====================================
// 6. Print All Students Reports
// =====================================

console.log("========== STUDENTS REPORT ==========");

studentsList.forEach(student => {
    const average = student.calculateAverage();
    const grade = student.calculateGrade(average);
    const result = student.getFinalResult(average);

    console.log("------------------------------");
    console.log("Student ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", grade);
    console.log("Final Result:", result);
});


// =====================================
// 7. Filter Students Who Need Mercy Marks
// =====================================

const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

console.log("========== STRUGGLING STUDENTS ==========");
console.log(strugglingStudents);


// =====================================
// 8. Add 5 Mercy Marks Using map()
// =====================================

const studentsAfterMercy = strugglingStudents.map(student => {
    const oldAverage = student.calculateAverage();
    const newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        mercyMarks: 5,
        newAverage: newAverage
    };
});

console.log("========== AFTER MERCY MARKS ==========");
console.log(studentsAfterMercy);


// =====================================
// 9. Calculate Total New Averages Using reduce()
// =====================================

const totalNewAverages = studentsAfterMercy.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);


// =====================================
// 10. Calculate Average After Mercy Marks
// =====================================

const mercyAverage = studentsAfterMercy.length > 0
    ? totalNewAverages / studentsAfterMercy.length
    : 0;

console.log("========== MERCY COMMITTEE REPORT ==========");
console.log("Number of Struggling Students:", strugglingStudents.length);
console.log("Total New Averages:", totalNewAverages);
console.log("Average After Mercy Marks:", mercyAverage.toFixed(2));

console.log("========== END OF REPORT ==========");