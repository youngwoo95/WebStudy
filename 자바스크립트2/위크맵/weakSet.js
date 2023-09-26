var visitedSet = new WeakSet();

var john = {name:"John"};
var pete = {name:"Pete"};
var mary = {name:"Mary"};

visitedSet.add(john); // John이 사이트를 방문합니다.
visitedSet.add(pete); // Pete이 사이트를 방문합니다.
visitedSet.add(john); // John이 사이트를 방문합니다.

// visitedSet엔 두 명의 사용자가 저장된다.

// John방문 여부
console.log(visitedSet.has(john)); // true
// Mary방문 여부
console.log(visitedSet.has(mary)); // false
john = null;

// visitedSet에서 john을 나타내는 객체가 자동으로 삭제됩니다.
