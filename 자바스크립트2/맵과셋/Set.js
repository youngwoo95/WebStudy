var set = new Set();

var john = {name : "John"};
var pete = {name : "Pete"};
var mary = {name : "Mary"};

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(pete);

// 셋에는 중복이 안된다.
console.log(set.size);

// 반복문으로 출력할 수 있음
for(let item of set){
    console.log(item.name);
}

// forEach를 사용할 수 있음
set.forEach((value, valueAgain, set) =>{
    console.log(value);
})