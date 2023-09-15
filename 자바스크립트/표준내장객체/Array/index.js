// 배열 만들기
console.log("==== 배열 만들기 ====")
var fruits = ["사과","바나나"];
console.log(fruits);

// 인덱스로 배열의 항목에 접근하기
console.log("==== 인덱스로 배열의 항목에 접근하기 ====");
var first = fruits[0]; 
console.log(first); // 사과
var last = first[first.length-1]; 
console.log(last); // 바나나

// 배열의 항목들을 순환하며 처리하기
console.log("==== 배열의 항목들을 순환하며 처리하기 ====");
fruits.forEach(function (item, index, array){
    console.log(item,index);
});

// 배열 끝에 항목 추가하기.
console.log("==== 배열 끝에 항목 추가하기 ====");
fruits.push("오렌지");
console.log(fruits);

// 배열 끝에서부터 항목 제거하기
console.log("==== 배열 끝에서부터 항목 제거하기 ====");
fruits.pop();
console.log(fruits);

// 배열 앞에서부터 항목 제거하기
console.log("==== 배열 앞에서부터 항목 제거하기 ====");
fruits.shift();
console.log(fruits);

// 배옆 앞에 항목 추가하기
console.log("==== 배열 앞에 항목 추가하기 ====");
fruits.unshift("딸기");
console.log(fruits);

// 배열 안 항목의 인덱스 찾기
console.log("==== 배열 안 항목의 인덱스 찾기 ====");
var pos = fruits.indexOf("바나나");
console.log(pos);

// 인덱스 위치에 있는 항목 제거하기
console.log("==== 인덱스 위치에 있는 항목 제거하기 ====");
var removeItem = fruits.splice(pos, 1);
console.log(removeItem);

// 인덱스 위치에서부터 여러개의 항목 제거하기
console.log("==== 인덱스 위치에서부터 여러개의 항목 제거하기 ====");
var vegetables = ["양배추","순무","무","당근"];
console.log(vegetables);

var pos = 1;
var n = 2;

// pos 인덱스부터 n개의 항목을 제거함.
console.log("==== pos 인덱스부터 n개의 항목을 제거함. ====");
var removedItems = vegetables.splice(pos,n);
console.log(vegetables);
console.log(removedItems);

// 배열 복사하기 - 얕은복사
console.log("==== 배열 복사하기(얕은 복사) ====");
var shallowCopySpread = [...fruits];
console.log(shallowCopySpread);

// 배열 요소에 접근하기
console.log("==== 배열 요소에 접근하기 ====");
var arr = ["첫 번째 요소입니다.","두 번째 요소입니다.","마지막 요소입니다."];
console.log(arr[0]); // 첫 번째 요소입니다.
console.log(arr[1]); // 두 번째 요소입니다.
console.log(arr[2]); // 마지막 요소입니다.

// 배열 길이와 숫자형 속성의 관계
console.log("==== 배열 길이와 숫자형 속성의 관계 ====")
var fruits = [];
fruits.push("바나나","사과","복숭아");
console.log(fruits.length);

fruits[5] = "mango";
console.log(fruits[5]); // 바나나, 사과, 복숭아, , , mango
console.log(Object.keys(fruits)); // ['0','1','2','5']
console.log(fruits.length);

// 배열 복사하기
console.log("==== 배열 복사하기(얕은 복사) ====");
var shallowCopySpread = [...fruits];
console.log(shallowCopySpread);

console.log("Array.slice()");
var shallowCopySlice = fruits.slice();
console.log(shallowCopySlice);

console.log("Array from()");
var shallowCopyFrom = Array.from(fruits);
console.log(shallowCopyFrom);

/*
    얖은 복사란 배열의 최상위 요소가 원시 값일 경우 복사하지만, 중첩 배열이나 객체 요소일 경우에는
    원본 배열의 요소를 참조하게 된다.

    모든 요소의 '깊은 복사', 즉 중첩 배열과 객체 요소 또한 동일한 형태로 복사하는 방법 중 하나는
    JSON.stringify()를 사용해 배열을 JSON 문자열로 변환한 후, JSON.parse()로 다시 배열을 구성하는 것이다.
*/

console.log("==== 배열 복사하기(깊은 복사) ====");
var deepCopy = JSON.parse(JSON.stringify(fruits));
console.log(deepCopy);

