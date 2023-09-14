// 배열 만들기
var shopping = ["bread","milk","cheese","hummus","noodels"];
console.log(shopping);

// 다양한 형태의 타입을 배열에 넣을 수 있음
var sequence = [1,1,2,3,5,8,13];
var random = ["tree",795,[0,1,2]];
console.log(sequence);
console.log(random);

// 배열 항목의 접근과 수정
console.log(shopping[0]);

// 다중배열
// - 배열 내부의 배열을 다중배열이라 함.
console.log(random[2][2]);

// 배열의 갯수 알아내기
console.log(sequence.length);

// ================================= 

// 문자열을 배열로, 배열을 문자열로 변경하기.
// split : 문자열을 분리하여 배열로 만들어준다.
var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
var myArray = myData.split(",");
console.log(myArray);
// 새로운 배열의 길이를 찾고 이 배열에서 몇가지 항목을 검색해봄.
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[myArray.length-1]);

// join : 배열을 다시 문자열로 만듬
var myNewString = myArray.join(",");
console.log(myNewString);
// toString() : 배열을 다시 문자열로 만듬
var dogName = ["Rocket","Flash","Bella","Slugger"];
console.log(dogName.toString());

// ================================= 

// 배열에 원소를 추가하고 제거하기
var myArray = [
    "Manchester",
    "London",
    "Liverpool",
    "Birmingham",
    "Leeds",
    "Carlisle"
];

// push() : 배열의 맨 끝에 원소를 추가함
myArray.push("Cardiff");
console.log(myArray);
myArray.push("Bradford","Birighton");
console.log(myArray);

// pop() : 배열의 마지막 원소를 제거
myArray.pop();
console.log(myArray);

// 메서드 호출이 완료되면 제거된 원소가 리턴됨.
var removeItem = myArray.pop();
console.log(myArray);
console.log(removeItem);

// unshift() : 제일 첫부분에 원소를 추가
myArray.unshift("Edinburgh");
console.log(myArray);

// shift() : 제일 첫부분에 원소를 제거
var removeItem = myArray.shift();
console.log(myArray);
console.log(removeItem);