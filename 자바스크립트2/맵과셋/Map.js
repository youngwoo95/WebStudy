let map = new Map();

map.set('1','str1'); // 문자형 키
map.set(1, 'num1'); // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));

// 맵은 키로 객체를 허용한다.
let john = {name : "John"};

let visitsCountMap = new Map();
visitsCountMap.set(john,123);

console.log(visitsCountMap.get(john));

// 맵의 요소에 반복 작업하기
let recipeMap = new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50]
]);

// 키를 대상으로 순회
for(let item of recipeMap.keys()){
    console.log(item);
}

// 값을 대상으로 순회
for(let item of recipeMap.values()){
    console.log(item);
}

// 키, 값 쌍을 대상으로 순회
for(let item of recipeMap){
    console.log(item);
}

//forEach 도 지원한다.
recipeMap.forEach((value, key, map)=>{
    console.log(`${key} ${value} ${map}`)
})

// Object.entries : 객체를 맵으로 바꾸기
let mapitem = new Map([
    ['1', 'str1'],
    [1,'num1'],
    [true, 'bool1']
]);

console.log(mapitem.get('1'));

// Object.entries(obj) 기존의 객체를 map으로 바꾸고 싶을때
let obj = {
    name: "John",
    age : 30
};
let mapitem1 = new Map(Object.entries(obj));
console.log(mapitem1.get("name"));

// Object.fromEntries: 맵을 객체로 바꾸기
let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);

console.log(prices.orange);

// 일반 맵을 객체로 바꾸기
let mapitem2 = new Map();
mapitem2.set('banana',1);
mapitem2.set('orange',2);
mapitem2.set('meat',4);

let obj1 = Object.fromEntries(mapitem2.entries());
console.log(obj1.orange);