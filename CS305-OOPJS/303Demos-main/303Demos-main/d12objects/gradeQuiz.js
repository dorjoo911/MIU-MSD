"use strict";

/*
Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an object that has properties with the names of each studentId and the value of the property will be their score on the quiz (one point for each correct answer)
 expect   { s101: 3, s102: 2, s103: 3 }
*/

const student1 = { studentId: "s101", quizAnswers: [1, 1, 2, 4] };
const student2 = { studentId: "s102", quizAnswers: [2, 1, 2, 2] };
const student3 = { studentId: "s103", quizAnswers: [3, 1, 3, 4] };
const key = [3, 1, 2, 4];
const quiz = [];
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);

/**
 * 
 * @param {Array} quizArray of student objects
 * @param {Array} keyArray the correct answers
 * @returns {Object} report object with student scores
 */
function gradeQuiz(quizArray, keyArray) {
    const report = {};
    /* go through each student and get their score */
    for (const student of quizArray) {
        const score = scoreQuiz(student.quizAnswers, keyArray);
        report[student.studentId] = score;
    }
    return report;
}

/* eslint-disable */
function scoreQuiz(stuAnswers, key) {
    return 10;
}
console.log("expect   { s101: 3, s102: 2, s103: 3 } ", gradeQuiz(quiz, key));