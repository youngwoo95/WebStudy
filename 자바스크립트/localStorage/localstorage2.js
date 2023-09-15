var obj = {
    name : 'anna',
    age : 20,
    temp : ['1','2']
}

// localStorage에 저장할 배열
var arr = [1, 2, 3];

// 객체, 배열을 JSON 문자열로 변환
var objString = JSON.stringify(obj);
console.log(objString);

// var arrString = JSON.stringify(arr);
// console.log(arrString);