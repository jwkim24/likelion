/*

*/

var num = 10; //변수 선언 + 초기화
num = 20;

console.log(num);

//배열
var student = {
    grade : 1,
    school : "lion school"
};

console.log(student)
console.log(typeof(student));
//객체의 값 호출
var gradeInfo = student.grade;

//객체의 키 호출
var key = Object.keys(student)[0];
