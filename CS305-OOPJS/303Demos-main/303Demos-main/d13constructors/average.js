"use strict";

/* 

Write a function, averageScore, that takes the grade report object 
and returns the average score of all the students. Your 
function should work for any number of students, but if you 
are not sure how to do that at least make it work for the given 3 
students. Hint: to handle any number remember the for .. in slide. 
*/

const gradeReport = { s101: 3, s102: 2, s103: 4 };

/**
 * 
 * @param {Object} grades on quiz
 * @returns {number} average grade
 */
function averageScore(grades) {
    let total = 0;
    let count = 0;
    for (const stuid in grades) {
        total += grades[stuid];
        count++;
    }
    const average = total / count;
    return average;
}

const totalScore = gradeReport.s101 + gradeReport.s102 + gradeReport.s103;
console.log("average is 3: ", totalScore / 3);

console.log("average is still 3: ", averageScore(gradeReport));