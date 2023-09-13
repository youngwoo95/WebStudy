console.log("================== splice() ===================");
// 빈공백 배열 변수 생성
// let splice = [];
// console.log(`배열의 내용 : ${splice}`);

// // push : 맨 끝 요소 추가
// for(let i=1;i<10;i++){
//     splice.push(i);
// }
// console.log(`push 후 배열의 내용 : ${splice}`);

// pop : 맨 끝 요소 제거
// splice.pop();
// console.log(`pop 후 배열의 내용 : ${splice}`);

// // shift : 맨 앞 요소 제거
// splice.shift();
// console.log(`pop 후 배열의 내용 : ${splice}`);

// // unshift : 맨 앞에 요소 추가
// splice.unshift(1);
// console.log(`unshift 후 배열의 내용 : ${splice}`);

// // delete : 배열의 공간은 남겨놓고 내용만 지우고싶을때
// delete splice[2];
// console.log(`delete 후 배열의 내용 : ${splice}`);

// splice : 배열의 공간도 지우고 내용도 지우고싶을때 - 지운 내용을 배열로 반환한다.
// splice(시작인덱스, 해당 개수);
//          시작인덱스만 있을경우 시작인덱스 이후로 모두 지움
// splice.splice(3, 4);
// console.log(`splice 후 배열의 내용 : ${splice}`);

// // splice(시작인덱스, 해당 개수, 해당 개수만큼 변경내용...);
// splice.splice(4,2,"여섯","일곱");
// console.log(`splice 후 배열의 내용 : ${splice}`);

// // splice 메서드의 deleteCount를 0으로 설정하면 요소를 제거하지 않으면서 새로운 요소를 추가할 수 있다.
// splice.splice(2,0,"테스트");
// console.log(splice);

// // slice 는 배열을 건드리지 않으면서 배열을 조작해 새로운 배열을 만들고자 할 때 사용됨.
// console.log("================== slice() ===================");
// console.log("arr.slice([start], [end])");

// let slice = [1,2,3,4];
// console.log(`slice 배열 내용 : ${slice}`);
// slice.slice(1,2);
// console.log(`slice 배열 내용 : ${slice}`); // 변함없음
// var temp = slice.slice(1,3);
// console.log(temp);


// // concat 은 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때 사용됨
// console.log("================== concat() ===================");
// let arr = [1,2,3];
// console.log(`concat 배열 내용 : ${arr}`);

// let temp1 = arr.concat([4,5]);
// console.log(`concat후 배열 내용 : ${temp1}`);

// // // foreach 로 반복작업하기
// temp1.forEach((item,index,array)=>{
//     console.log(`${item} ${index} ${array}`);
// });

// // find - 반환값이 1개일때
// /*
//     let result = arr.find(function(item, index, array))
//     // true가 반환되면 반복이 멈추고 해당 요소를 반환한다.
//     // 조건에 해당하는 요소가 없으면 undefined를 반환한다.
//     - item : 함수를 호출할 요소
//     - index : 요소의 인덱스
//     - array : 배열 자기 자신
// */

// let users = [
//     {id: 1, name : "John"},
//     {id: 2, name : "Pete"},
//     {id: 3, name : "Mary"}
// ]

// var item = users.find(i => i.id == 1);
// console.log(item.name);

// // filter - 반환값이 2개 이상일때
// var item = users.filter(i => i.id > 1);
// console.log(item.length);

// // =========================================================
// // 배열을 변형하는 메서드

// // map : 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해준다.
// let arr_map = ["Bilbo","Gandalf","Nazgul"].map(item=>item.length);
// console.log(arr_map);


