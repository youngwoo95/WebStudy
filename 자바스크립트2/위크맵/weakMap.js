var weakMap = new WeakMap();
var obj = {};
weakMap.set(obj, "ok"); // 정상적으로 동작한다. (객체 키)

// 문자열 (test)은 키로 사용할 수 없다.
//weakMap.set("text","whoops");

// 위크맵의 키로 사용된 객체를 참조하는 것이 아무것도 없다면 해당 객체는 메모리와 워크맵에서 자동으로 삭제된다.
var john = {name : "John"};
var weakMap = new WeakMap();
weakMap.set(john, "...");
console.log(weakMap.get(john));
// 참조를 덮어쓴다.
john = null; 
// john을 나타내는 객체는 메모리에서 지워진다.
console.log(weakMap.get(john));


