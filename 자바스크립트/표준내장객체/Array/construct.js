// Array() 생성자

/*
    Array() 생성자는 새로운 Array 객체를 생성할 때 사용된다.

    -- 구문
    new Array()
    new Array(element0)
    new Array(element0, element1)
    new Array(element0, element1, ... elementN);
    new Array(arrayLength)


    Array()
    Array(element0)
    Array(element0, element1)
    Array(element0, element1, ... elementN);
    Array(arrayLength)
*/

// 배열 리터럴 표기법
console.log("==== 배열 리터럴 표기법 ====");
var fruits = ["사과", "바나나"];

console.log(fruits.length); // 2
console.log(fruits[0]); // 사과


// 단일 매개변수 배열 생성자
console.log("==== 단일 매개변수 배열 생성자 ====");
var arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

// 복수 매개변수 배열 생성자
console.log("==== 복수 매개변수 배열 생성자 ====");
var fruits = new Array("사과","바나나");

console.log(fruits.length);
console.log(fruits[0]);