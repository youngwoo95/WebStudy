// const output = function(){
//     console.log("함수를 실행했습니다.")
// }

const messageContainer = document.querySelector("#d-day-message");
messageContainer.style.color = "red";
//messageContainer.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>"; // innerHTML : 직접 HTML을 입력해주는것. / 태그도 사라짐

//messageContainer.textContent = "D-Day를 입력해주세요";

const container = document.querySelector("#d-day-container");

container.style.display = "none";

/*
window.onload = function () {
  const messageContainer = document.querySelector("#d-day-message");
  messageContainer.textContent = "D-Day를 입력해주세요";
};
*/
const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  console.log(inputYear, inputMonth, inputDate);

  return dateFormat;
};

const counterMaker = function () {
  var temp = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(temp).setHours(0, 0, 0, 0); // setHours(0,0,0,0) - 자정을 기준으로함. 안줄시 UTC 09시 기준.
  const remaining = (targetDate - nowDate) / 1000;

  // remaining === 0 : 목표시간에 도달
  if (remaining <= 0) {
    // 만약, remaining이 0 이라면, 타이머가 종료되었습니다. 출력
    messageContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
    messageContainer.style.display = "flex";
    return;
  } else if (isNaN(remaining)) {
    // 자바스크립트에서 NaN 검사하는 방법
    // 만약 잘못된 날자가 들어왔다면, 유효한 시간대가 아닙니다.
    messageContainer.innerHTML = `<h3>유효한 시간대가 아닙니다.</h3>`;
    container.style.display = "none";
    messageContainer.style.display = "flex";
    return;
  }
  /*
  const remainingDate = Math.floor(remaining / 3600 / 24); // 일자
  const remainingHours = Math.floor(remaining / 3600) % 24; // 시간
  const remainingMin = Math.floor(remaining / 60) % 60; // 분
  const remainingSec = Math.floor(remaining) % 60; // 초
*/
  const remainObj = {
    remainingDate: Math.floor(remaining / 3600 / 24), // 일자
    remainingHours: Math.floor(remaining / 3600) % 24, // 시간
    remainingMin: Math.floor(remaining / 60) % 60, // 분
    remainingSec: Math.floor(remaining) % 60, // 초
  };

  /*
  const days = document.querySelector("#days");
  const hours = document.getElementById("hours");
  const min = document.getElementById("min");
  const sec = document.querySelector("#sec");
*/

  //   const documentObj = {
  //     days: document.querySelector("#days"),
  //     hours: document.getElementById("hours"),
  //     min: document.getElementById("min"),
  //     sec: document.querySelector("#sec"),
  //   };

  // 매개변수로 들어오는 객체변수의 키들을 뽑아낸다.
  // const timeKeys = Object.keys(remainObj);
  //   const docKeys = Object.keys(documentObj);
  //   console.log(timeKeys, docKeys);

  //   for (let i = 0; i < timeKeys.length; i++) {
  //     documentObj[docKeys[i]].textContent = remainObj[timeKeys[i]].value;
  //   }
  let i = 0;
  const timeKeys = Object.keys(remainObj);
  const documentArr = ["days", "hours", "min", "sec"];
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainObj[timeKeys[i]];
    i++;
  }

  //   const timeKeys = Object.keys(remainObj);
  //   let i = 0;
  //   for (let key in documentObj) {
  //     documentObj[key].textContent = remainObj[timeKeys[i]];
  //     i++;
  //   }

  //   documentObj.days.textContent = remainObj.remainingDate;
  //   documentObj.hours.textContent = remainObj.remainingHours;
  //   documentObj.min.textContent = remainObj.remainingMin;
  //   documentObj.sec.textContent = remainObj.remainingSec;

  // console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  for (let i = 0; i < 100; i++) {
    // 코드의 실행을 늦춰주는 기능 - 지연
    setTimeout(() => {
      counterMaker();
    }, 1000 * i);
  }
};
