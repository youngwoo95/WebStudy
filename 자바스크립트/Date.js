// Date 객체와 날짜

// 객체 생성하기
/*
    new Date() 를 호출하면 새로운 Date 객체가 만들어지는데, new Date() 는 다음과 같은 형태로 호출할 수 있다.
*/

// new Date() : 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환된다.
var time = new Date();
console.log(time);

// new Date(milliseconds) : UTC 기준(UTC+0) 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초(1/1000초) 후의 시점이 저장된 Date 객체가 반환됨
var time = new Date(0);
console.log(time);
// 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
var time = new Date(24 * 3600 * 1000);
console.log(time);

// 타임스탬프 : 1970년의 첫날을 기준으로 흘러간 밀리초를 나타내는 정수를 의미
// 1970년 1월 1일 이전 날짜에 해당하는 타임스탬프 값은 음수.
var time = new Date(-24 * 3600 * 1000);
console.log(time);

// 문자열 - Date 변환
var time = new Date("2017-01-26");
console.log(time);

// 인수조합
// new Date(year, month, date, hours, minutes, seconds, ms)
console.log(new Date(2023,11,25,0,0,0,0));

// 날짜 구성요소 얻기
// Date 객체의 메서드를 사용하면 연, 월, 일 등의 값을 얻을 수 있다.
/*
    getFullYear() : 연도(네 자릿수)를 반환합니다.
    getMonth() : 월을 반환합니다(0 이상 11이하)
    getDate() : 일을 반환합니다(1 이상 31이하)
    getHours() : 시를 반환합니다
    getMinutes() : 분을 반환합니다
    getSeconds() : 초를 반환합니다.
    getMilliseconds() : 밀리초를 반환합니다.
*/
