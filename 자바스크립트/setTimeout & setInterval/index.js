
// setTimeout과  setInterval을 이용한 호출 스케줄링

/*
    setTimeout : 일정 시간이 지난 후에 함수를 실행하는 방법
    setInterval : 일정 시간 간격을 두고 함수를 실행하는 방법
*/

// setTimeout
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
/*
    func|code : 실행하고자 하는 코드로, 함수 또는 문자열 형태이다. 대개는 이 자리에 함수가 들어간다.
              : 하위 호환성을 위해 문자열도 받을 수 있게 해놓았지만 추천하지 않습니다.
            
    delay : 실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1)이며 기본값은 0입니다.

    arg1, arg2... : 함수에 전달할 인수들로, IE9 이하에선 지원하지 않는다.
 */

console.log("===기본===");

function sayHi()
{
    console.log("안녕하세요");
}
setTimeout(sayHi, 1000);

console.log("함수에 인수 넘기기");
function sayHi2(who, phrase){
    console.log(`${who}님, ${phrase}`);
}

setTimeout(sayHi2, 2000,"홍길동","안녕하세요");


// clearTimeout()으로 스케줄링 취소하기
/*
    setTimeout을 호출하면 '타이어 식별자(timer identifier)'가 반환됩니다. 스케줄링을 취소하고 싶을 땐 clearTimeout()을 사용하면 된다.
*/
console.log("=== clearTimeout() ===")
var timerId = setTimeout(()=> console.log("안녕하십니까"),3000);
clearTimeout(timerId);
//console.log(timerId)

// SetInterval
/*
    let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
*/

var timerId = setInterval(()=> console.log("반복"),2000);
// 5초후 정지
setTimeout(() =>{clearInterval(timerId); console.log("정지");},1000);
clearTimeout(timerId);
// 중첩 setTimeout
// 무언가를 일정 간격을 두고 실행하는 방법에는 크게 2가지가 있다.
// 하나는 setInterval을 이용하는 방법, 다른 하나는 아래 예시와 같이 중첩 setTimeout을 이용하는 방법

let timeId = setTimeout(function tick(){
    console.log("알람");
    timerId = setTimeout(tick, 2000);
}, 2000);