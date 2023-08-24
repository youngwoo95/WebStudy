// Array 객체 ========================================
/*
    자바스크립트에서 배열(array)은 정렬된 값들의 집합으로 정의되며, Array 객체로 다뤄진다.
*/

// Array 메소드
/*
    자바스크립트는 사용자가 배열과 관련된 작업을 손쉽게 할 수 있도록 다양한 메소드를 제공하고 있다.
    Array 메서드는 Array 객체에 정의된 배열과 관련된 작업을 할 때 사용하는 메서드입니다.

    1. Array.isArray()
    2. Array.from()
    3. Array.of()
*/

// [1]. Array.isArray()
/*
    전달받은 값이 Array 객체인지 아닌지를 검사
*/
/*
console.log(Array.isArray([])); // true
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray(123)); // false
console.log(Array.isArray("Array")); // false
console.log(Array.isArray(true));
*/

// [2]. Array.from() 메서드
/*
    ECMAScript 6부터 추가된 Array.from() 메소드는 다음 객체들을 배열처럼 변환시켜 준다.
        1. 배열과 비슷 한 객체(array-like objects) : length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
        2. 반복할 수 있는 객체(iterable objects) : Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체
            * 하지만 이렇게 생성된 객체는 정확히 말하면 Array 객체는 아니며, Array 객체의 자식 클래스 (child class) 이다.
*/
/*
function arrayFrom(){
    return Array.from(arguments);
}

console.log(Array.from(arrayFrom(1,2,3)));
var myMap = new Map([[1,2],[3,4]]);
console.log(myMap);

console.log(Array.from("JavaScript"));
*/

// [3]. Array.of() 메서드
/*
    ECMAScript 6 부터 추가된 Array.of() 메서드는 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성한다.
    이때 Array.of() 메서드와 Array 객체 생성자와의 차이로는 정수로 전달된 인수의 처리 방식에 있다.
*/
/*
console.log(new Array(10));
console.log(Array.of(10));
*/
/*
    위의 예제에서 Array 객체 생성자에 인수로 정수 10을 전달하면, 생성자의 길이가 10인 배열을 생성한다.
    하지만, Array.of() 메서드에 인수로 정수 10을 전달하면, 정수 10을 배열 요소로 가지는 길이가 1인 배열을 생성한다.
*/

/*
    Array.isArray() : 전달된 값이 Array 객체인지 아닌지를 검사
    Array.from() : 배열과 비슷한 객체와 반복할 수 있는 객체를 배열처럼 반환
    Array.of() : 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성함.
*/

// Array Method ========================================
/*
    Array.prototype 메서드

    모든 Array 인스턴스는 Array.prototype으로부터 메소드와 프로퍼티를 상속받는다.
    이렇게 상속받은 Array.prototype 메소드는 크게 다음과 같이 구분할 수 있다.

    1. 원본 배열을 변경하는 메서드
    2. 원본 배열은 변경하지 않고 참조만 하는 메서드
    3. 원본 배열을 반복적으로 참조하는 메서드
*/

// [1]. 원본 배열을 변경하는 Array.prototype 메서드
/*
    다음 메서드는 원본 배열을 직접 변경하는 메서드이다.

    1. push()
    2. pop()
    3. shift()
    4. unshift()
    5. reverse()
    6. sort()
    7. splice()
*/

// [1]. push()
/*
    하나 이상의 요소를 배열의 가장 마지막에 추가한다.
    원본 배열은 추가한 요소의 수만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환한다.
*/

/*
var arr = [1, true, "JavaScript"];
console.log(arr.length); // 3
arr.push("자바스크립트");
console.log(arr.length); // 4
console.log(arr); // [1, true, "JavaScript", "자바스크립트"]
arr.push(2, "거짓");
console.log(arr.length); // 6
console.log(arr); // [1, true, "JavaScript", "자바스크립트", 2, "거짓"]
*/

// [2]. pop()
/*
    배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환한다.
    따라서 pop() 메서드를 생성할 때마다 배열의 길이는 1씩 줄어들게 된다.
*/
/*
var arr = [1, true, "JavaScript", "자바스크립트"];
console.log(arr);
arr.pop(); // 자바스크립트
console.log(arr.length); // 3
arr.pop(); // "JavaScript"
console.log(arr.length); // 2
console.log(arr); // [1, true]
*/

// [3]. shift()
/*
    pop() 메서드와는 달리 배열의 가장 마지막 요소가 아닌 첫 요소를 제거하고, 그 제거된 요소를 반환한다.
    따라서 Shift() 메소드도 실행할 때마다 배열의 길이가 1씩 줄어들게 된다.
*/
/*
var arr = [1, true, "JavaScript", "자바스크립트"];
console.log(arr.length); // 4
arr.shift(); // 1
console.log(arr.length); // 3
arr.shift(); // true
console.log(arr.length); // 2
console.log(arr); // ["JavaSciprt", "자바스크립트"]
*/

// [4]. unshift()
/*
    하나 이상의 요소를 배열의 가장 앞에 추가한다.
    원본 배열은 추가한 요소의 수 만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환한다.
*/

/*
var arr = [1, true, "JavaScript"];
console.log(arr.length); // 3
arr.unshift("자바스크립트");
console.log(arr.length); // 4
console.log(arr); // ["자바스크립트", 1, true, "JavaScript"]
arr.unshift(2, "거짓");
console.log(arr.length); // 6
console.log(arr); // [2, "거짓", "자바스크립트", 1, true, "JavaScript"]
*/

// [5]. reverse()
/*
    배열 요소의 순서를 전부 반대로 교체
    즉, 가장 앞에 있던 요소가 가장 뒤에 위치하며, 가장 뒤에 있던 요소는 가장 앞에 위치하게 된다.
*/
/*
 var arr = [1, true, "JavaScript","자바스크립트"];
 arr.reverse(); // 배열의 순서반대로
 console.log(arr);
 */

 // [6]. sort()
/*
   해당 배열의 배열 요소들을 알파벳 순서에 따라 정렬한다.
   이 메서드는 배열 요소를 모두 문자열로 보고 정렬하므로, 숫자나 불리언과 같은 타입의 요소들은 잘못 정렬될 수도 있다.
*/

/*
var strArr = ["로마", "나라", "감자", "다람쥐"]; // 한글은 ㄱ, ㄴ, ㄷ 순으로 정렬됨.
var numArr = [10, 21, 1, 2, 3]; // 숫자는 각 자릿수 별로 비교된 후 정렬됨
console.log(strArr.sort()); // [감자, 나라, 다람쥐, 로마]
console.log(numArr.sort()); // [1, 10, 2, 21, 3]
*/

// [7]. splice()
/*
    기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경한다.

    첫 번째 인수는 새로운 요소가 삽입될 위치의 인덱스이며, 두 번째 인수는 제거할 요소의 개수이다.
    그 이후의 인수들은 모두 배열 요소로서 지정된 인덱스부터 차례대로 삽입된다.
    이 메서드는 배열에서 제거된 요소를 배열의 형태로 반환하며, 아무 요소도 제거되지 않았다면 빈 배열을 반환합니다.
*/

/*
var arr = [1, true, "JavaScript","자바스크립트"];
var removedElement = arr.splice(1,2,false,"C언어");
console.log(arr); // [1, false, C언어, 자바스크립트]
console.log(removedElement);
*/

// 자바스크립트 Array.prototype 메서드
/*
    push() : 하나 이상의 요소를 배열의 가장 마지막에 추가하고, 배열의 총 길이를 반환함.
    pop() : 배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환함.
    shift() : 배열의 가장 첫 요소를 제거하고, 그 제거된 요소를 반환함.
    unshift() : 하나 이상의 요소를 배열의 가장 앞에 추가하고, 배열의 총 길이를 반환함.
    reverse() : 배열의 요소의 순서를 전부 반대로 교체함
    sort() : 해당 배열의 배열 요소들을 알파벳 순서에 따라 정렬함.
    splice() : 기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경함.
    copyWithin() : 해당 배열에서 일련의 요소들을 복사하여, 명시된 위치의 요소들을 교체함
    fill() : 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 특정 값으로 교체함.
*/

// 원본 배열은 변경하지 않고 참조만 하 는 메서드
/*
    1. join()
    2. slice()
    3. concat()
    4. toString()
*/

// join()
/*
    배열의 모든 요소를 하나의 문자열로 반환한다.
    인수로 전달받은 문자열은 배열 요소 사이를 구분 짓는 구분자로 사용된다.
    만약 인수를 전달받지 않으면 기본값으로 쉼표(,)를 구분자로 사용한다.
*/
/*
var arr = [1, true, "JavaScript"];
console.log(arr.join());
arr.join(" + ");
console.log(arr);
console.log(arr.join("+"));
*/

// slice()
/*
    전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 추출하여 새로운 배열을 반환한다.
    인수로 종료 인덱스가 전달되지 않으면 마지막 배열요소까지 모두 추출한다.
*/
/*
var arr = [1, true, "JavaScript","자바스크립트"];
console.log(arr.slice(1,3)); // true, JavaScript
console.log(arr.slice(1)); // true, JavaScript, 자바스크립트
*/

// concat()
/*
    해당 배열의 뒤에 인수로 전달받은 배열을 합쳐서 만든 새로운 배열을 반환
*/
/*
var arr = [1, true, "JavaScript"];
console.log(arr);
var arr1 = arr.concat([2,false,"문자열"]);
console.log(arr1);
var arr2 = arr.concat([2,3],[4,5,6]); // 2개 이상의 배열도 한번에 합칠 수 있음.
console.log(arr2);
*/

// toString()
/*
    해당 배열의 모든 요소를 하나의 문자열로 반환한다.
    이 때, 배열 요소 사이에는 자동으로 쉼표(,)가 삽입된다.
*/
/*
var arr = [1, true, "JavaScript"];
console.log(arr.toString());
*/

// # 자바스크립트 Array.prototype 메서드
/*
    join() : 배열의 모든 요소를 하나의 문자열로 반환함
    slice() : 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 추출하여 만든 새로운 배열을 반환함.
    concat() : 해당 배열의 뒤에 인수로 전달받은 배열을 합쳐서 만든 새로운 배열을 반환함.
    toString() : 해당 배열의 모든 요소를 하나의 문자열로 반환함.
    toLocaleString() : 해당 배열의 모든 요소를 하나의 문자열로 반환함.
    indexOf() : 전달받은 값과 동일한 배열 요소가 처음으로 등장하는 위치의 인덱스를 반환함.
    lastIndexOf() : 전달받은 값과 동일한 배열 요소가 마지막으로 등장하는 위치의 인덱스를 반환함.
*/

// # 원본 배열을 반복적으로 참조하는 메서드
/*
    다음 메서드는 원본 배열을 변경하지 않고, 반복적으로 참조만 하는 메서드이다.

        1. forEach()
        2. map()
        3. filter()
        4. every()
        5. some()
        6. reduce()
        7. reduceRight()
        8. entries()
        9. keys()
        10. values()
*/

// [1]. foreach 메서드
/*
    forEach() 메서드는 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한다.
*/

/*
var arr = [1, true, "JavaScript"];
function printArr(value, index, array){
    console.log("arr[" + index + "] = " + value + "<br>");
}

arr.forEach(printArr);
*/

// [2]. map() 메서드
/*
    해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열에 담아 반환
*/

/*
var arr = [1, -2, 3, -4];
// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결과값이 배열로 저장됨
var absoluteValues = arr.map(Math.abs);
console.log(absoluteValues); // [1,2,3,4]
*/

// [3]. filter() 메서드
/*
    해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 true인 요소들만을 새로운 배열에 담아 반환한다.
*/

/*
var arr = [-10, 5, 100, -20, 40];
function compareValue(value){
    return value < 10;
}

var lessTen = arr.filter(compareValue);
console.log(lessTen); // [-10, 5, -20]
*/

// [4]. every() 메서드
/*
    해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 모두 true일 때만 true를 반환
*/
/*
var arr = [-10, 5, -20, 4];
function compareValue(value){
    return value < 10; // 배열의 모든 요소가 10보다 작음.
}

console.log(arr.every(compareValue)); // true
*/


// [5]. some() 메서드
/*
    해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 하나라도 true이면 true를 반환.
*/
/*
var arr = [10, 25, -20, 14];
function compareValue(value){
    return value < 10;
}

console.log(arr.some(compareValue));
*/

// [6]. reduce() 메서드
/*
    해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행한다.
    이 때, 명시된 콜백 함수에 배열의 첫 번째 요소와 두 번째 요소를 인수로 전달하고 실핸한다.
    그 결과 반환된 결과값과 세 번째 요소르 다시 인수로 전달하고 실행한다.
    이러한 동작을 반복하여 모든 배열 요소를 인수로 전달하고, 마지막으로 반환된 결과값을 반환한다.
*/

/*
var arr = [1,2,3,4,5];
function sumOfValues(x, y){
    return x-y;
}

console.log(arr.reduce(sumOfValues)); // 1 - 2 - 3 - 4 - 5 = -13
*/

// [7]. reduceRight() 메서드
/*
    reduce() 메소드와 같은 방식으로 실행되며, 배열의 마지막 요소부터 줄이기 시작한다.
*/

/*
var arr = [1,2,3,4,5];
function sumOfValue(x, y){
    return x-y;
}

console.log(arr.reduceRight(sumOfValue)); // 5 - 4 - 3 - 2 - 1 = -5
*/

// [8]. entries() 메서드
/*
    배열 요소별로 키(key)와 값(value)의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환.
    이 때, 키에는 인덱스가 저장되며, 값에는 배열 요소의 값이 저장된다.
*/

/*
var arr = [1, true, "TCPSchool"];
var arrEntries = arr.entries();

for (var entry of arrEntries) {
    console.log(entry + "<br>"); // 배열의 각 인덱스별로 키(key)와 값(value)의 한 쌍을 출력함.
}
*/

// 자바스크립트 Array.prototype 메서드
/*
    forEach() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행함.
    map() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열로 반환함.
    filter() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과갑싱 true인 요소들만을 새로운 배열에 담아 반환함
    every() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 모두 true일 때만 true를 반환함
    some() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 하나라도 true이면 true를 반환함.
    reduce() : 해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행함.
    (배열의 첫 번째 요소부터 시작함.)
    reduceRight() : 해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행함.
    (배열의 마지막 요소부터 시작함.)
    entries() : 배열 요소별로 키와 값의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환함.
    keys() : 배열 요소별로 키(key)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환함.
    values() : 배열 요소별로 값(value)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환함.
    find() : 검사를 위해 전달받은 함수를 만족하는 배열 요소의 값을 반환함. 만족하는 값이 없으면 undefined를 반환함.
    findIndex() : 검사를 위해 전달받은 함수를 만족하는 배열 요소의 인덱스를 반환함. 만족하는 값이 없으면 -1을 반환함.
*/