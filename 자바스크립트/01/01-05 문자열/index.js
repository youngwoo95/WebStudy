// 문자열은 Object(객체) 이다.

var string ="This is my string";

// 문자열의 길이 찾기
var browserType ="mozilla";
console.log(browserType.length);

// 특정 문자열 찾기
console.log(browserType[0]);

// 문자열의 마지막 문자 구하기
// - 컴퓨터는 1이 아니라 0부터 숫자를 센다.
console.log(browserType[browserType.length-1]);

// 문자열 내부의 하위 문자열 찾기 및 추출
// .indexOf();
// 결과는 2이다. 하위 문자열인 "zilla"는 "mozilla"의 2번 위치(0, 1, 2 --- 그러므로 3번째 문자열)에서 시작한다.
// 이러한 코드는 문자열을 필터링하는 데 사용될 수 있다.
console.log(browserType.indexOf("zilla"));

// 문자열 내부의 하위 문자열 찾기 및 추출 -2
// 이렇게 하면 -1 이 출력된다.
console.log(browserType.indexOf("vanilla"));
if(browserType.indexOf("mozilla") !== -1){
    console.log("없음");
}
else{
    console.log("있음");
}

// slice()
// 문자열 추출
// 첫 번째 파라미터는 추출을 시작할 문자 위치
// 두 번째 파라미터는 추출할 문자의 개수
console.log(browserType.slice(0,3));

// 또한 특정 문자 뒤에 문자열의 나머지 문자를 모두 추출하려는 경우 두 번째 매개 변수를 포함하지 않고
// 문자열에서 나머지 문자를 추출할 위치의 문자 위치만 포함하면 된다.
console.log(browserType.slice(2));

// 대/소문자 변경
// toLowerCase() : 문자열을 가져와 모두 소문자로 변경
// toUpperCase() : 문자열을 가져와 모두 대문자로 변경
var radData = "My Name Is Mud";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// 문자열의 일부를 변경하기
// replace() : 문자열 내의 한 하위 문자열을 바꿀 수 있음.
console.log(browserType.replace("moz","van"));