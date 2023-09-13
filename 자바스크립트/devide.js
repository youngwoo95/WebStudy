/* 구조 분해 할당 */

// 배열 분해하기
var arr = ["Bora","Lee"];

// 구조 분해 할당을 이용해 firstName엔 arr[0]을 surname엔 arr[1]을 할당
console.log("구조 분해 할당을 이용해 firstName엔 arr[0]을 surname엔 arr[1]을 할당");
var [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// split 을 활용하여 구조 분해하는방법
console.log("split 을 활용하여 구조 분해하는방법");
var [firstName, surname] = "Bora Lee".split(' ');
console.log(firstName);
console.log(surname);

// 쉼표를 사용하여 요소 무시하기
/*
    쉼표로 표시된 두번째요소, 할당할 자리가 없는 4번째 요소는 무시된다.
*/
console.log("쉼표를 사용하여 요소 무시하기");
var [firstName,,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstName);
console.log(title);

// 할당 연산자 우측엔 모든 이터러블이 올 수 있음.
console.log("할당 연산자 우측엔 모든 이터러블이 올 수 있음.");
var [a, b, c] = "abc";
console.log(a);
console.log(b);
console.log(c);

var [one, two, three] = new Set([1,2,3]);
console.log(one);
console.log(two);
console.log(three);

// 할당 연산자 좌측엔 뭐든지 올 수 있음
console.log("할당 연산자 좌측엔 뭐든지 올 수 있음");
var user = {};
[user.name, user.surname] = "Bora Lee".split(' ');
console.log(user.name);
console.log(user.surname);

// .entries()로 반복하기
var user ={
    name: "John",
    age: 30
};

for(let[key, value] of Object.entries(user)){
    console.log(`KEY : ${key} / VALUE : ${value}`);
}

// 변수 교환 트릭 - 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용할 수 있음
console.log("변수 교환 트릭 - 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용할 수 있음");
var guest = "Jane";
var admin = "Pete";

[guest, admin] = [admin, guest];
console.log(`GEUST : ${guest} / ADMIN : ${admin}`);

// ...로 나머지 요소 가져오기
console.log("...로 나머지 요소 가져오기");

var [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1);
console.log(name2);

console.log("... 요소는 배열로 반환됩니다.");
console.log(rest[0]);
console.log(rest[1]);

// 객체 분해하기
console.log("============================ 객체 분해하기 ===============================");
var options = {
    title : "Menu",
    width: 100,
    height: 200
};

var {title, width, height} = options;
console.log(`title : ${title}`);
console.log(`width : ${width}`);
console.log(`height : ${height}`);

// 순서가 바뀌어도 동일하게 동작함.
console.log("순서가 바뀌어도 동일하게 동작함.");
var {height, width, title} = options;
console.log(`title : ${title}`);
console.log(`width : ${width}`);
console.log(`height : ${height}`);

// 목표변수를 설정할 수 있음
console.log("목표변수를 설정할 수 있음");
var options = {
    title: "Menu",
    width: 100,
    height: 200
};

var {width: w, height: h, title} = options;
console.log(`w : ${w}`);
console.log(`h : ${h}`);
console.log(`title : ${title}`);

var options = {
    title: "Menu"
};

var {width = 100, height = 200, title} = options;

console.log(`title : ${title}`);
console.log(`width : ${width}`);
console.log(`height : ${height}`);

// 나머지 패턴 '...'
console.log("나머지 패턴 '...'");
var options = {
    title : "Menu",
    height: 200,
    width: 100
};

var {title, ...rest} = options;
console.log(title);
console.log(rest.height);

console.log("==============================");
console.log("구조분해 할당 문제 [1]");
var users = {
    name : "John",
    years : 30
};
console.log(users);

var{name, years:age, isAdmin = false} = users;
console.log(name);
console.log(age);
console.log(isAdmin);

console.log("최대 급여 계산하기");