// 브라우저 내장 함수
var myText = "I am a string";
var newString = myText.replace("string","sausage");
console.log(newString);

// 브라우저 내장 함수 - 배열
var myArray = ["I","love","chocolate","forgs"];
var madeAString = myArray.join(" ");
console.log(madeAString);

// 무작위 숫자를 생성
var myNumber = Math.floor(Math.random()*1000);
console.log(myNumber);

// 함수호출
function myFunction(){
    console.log("hello");
}
myFunction();

// 익명함수 - 이벤트 핸들러랑 같이 쓰인다.
// function(){
//     console.log("hello2");
// }