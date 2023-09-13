// Map, Set

/*
    객체 : 키가 있는 컬렉션을 저장함.
    배열 : 순서가 있는 컬렉션을 저장함.
*/

/*
    맵 : 키가 있는 데이터를 저장한다는 점에서 객체와 유사
        - 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있음.

        new Map() : 맵을 만든다.
        map.set(key, value) : key를 이용해 value를 저장한다.
        map.get(key) : key에 해당하는 값을 반환한다. key가 존재하지 않으면 undefined를 반환한다.
        map.has(key) : key가 존재하면 true, 존재하지 않으면 false를 반환한다.
        map.delete(key) : key에 해당하는 값을 삭제한다.
        map.clear() : 맵안에 모든 요소를 제거한다.
        map.size : 요소의 개수를 반환한다.
*/

let map = new Map();
map.set('1','문자형 키');
map.set(1, '숫자형 키');
map.set(true, '불린형 키');

console.log(map.get('1'));
console.log(map.get(true));

// 맵은 키로 객체를 허용한다
let john = {name:"John"};

let visitsCountMap = new Map();
visitsCountMap.set(john,123);

console.log(visitsCountMap.get(john));

// 맵 요소에 반복 작업하기
/*
    map.keys() - 각 요소의 키를 모은 반복 가능한 (iterable, 이터러블) 객체를 반환한다.
    map.values() - 각 요소의 값을 모은 이터러블 객체를 반환함.
    map.entries() - 요소의 [키, 값]을 한 쌍으로 하는 이터러브르 객체를 반환한다. 이 이터러블 객체는 for..of 반복문의 기초로 쓰인다.
*/

let recipeMap = new Map([
   ['cucumber',500],
   ['tomatoes',350],
   ['onion',50]
]);

// 키 를 대상으로 순회
for(let item of recipeMap.keys()){
    console.log(item);
}
// 값 을 대상으로 순회
for(let item of recipeMap.values()){
    console.log(item);
}
// 키와 값 쌍을 대상으로 순회
for(let item of recipeMap){
    console.log(item);
}

// 맵은 배열과 유사하게 내장 메서드 forEach도 지원한다.
recipeMap.forEach((value, key, map)=>{
    console.log(`${key} / ${value} / ${map}`);
})

// Object.entries : 객체를 맵으로 바꾸기
var item = {
    name:"John",
    age:30
};

map = new Map(Object.entries(item));
console.log(map);

// Object.fromEntries : 맵을 객체로 바꾸기
let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);

console.log(prices.orange);


/*
    셋 : 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션.
         셋에 키가 없는 값이 저장된다.

         - new Set(iterable) 
            : 셋을 만든다.
            : 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어준다.
        - set.add(value)
            : 값을 추가하고 셋 자신을 반환한다.
        - set.delete(value)
            : 값을 제거한다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환한다.
        - set.has(value)
            : 셋 내에 값이 존재하면 true, 아니면 false를 반환한다.
        - set.clear()
            : 셋을 비운다
        - set.size
            : 셋에 몇 개의 값이 있는지 센다.
*/

var set = new Set();

var item1 = {name : "John"};
var item2 = {name : "Pete"};
var item3 = {name : "Mary"};

set.add(item1);
set.add(item2);
set.add(item3);
set.add(item1);
set.add(item2);

console.log(`set의 크기 ${set.size}`);

////////////////////////
/*
    문1) 배열에서 중복 요소 제거하기
*/
var values = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","hare","Hare", ":-0"];

// 내가 푼거
var set = new Set();
for(let item of values){
    set.add(item);
}
console.log(`SET의 크기 : ${set.size}`);

// 해설
var values = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","hare","Hare", ":-0"];
var temp = Array.from(new Set(values));
console.log(temp.length);

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );
