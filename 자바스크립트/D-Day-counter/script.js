const messageContainer = document.querySelector("#d-day-message");
messageContainer.style.color = "red";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>"; // innerHTML : 직접 HTML을 입력해주는것. / 태그도 사라짐
const container = document.querySelector("#d-day-container");

container.style.display = "none";
const InterverIdArr = [];

const savedDate = localStorage.getItem("saved-date");

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  console.log(inputYear, inputMonth, inputDate);

  return dateFormat;
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", targetDateInput);
  }

  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0); // setHours(0,0,0,0) - 자정을 기준으로함. 안줄시 UTC 09시 기준.
  const remaining = (targetDate - nowDate) / 1000;

  // remaining === 0 : 목표시간에 도달
  if (remaining <= 0) {
    // 만약, remaining이 0 이라면, 타이머가 종료되었습니다. 출력
    messageContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 자바스크립트에서 NaN 검사하는 방법
    // 만약 잘못된 날자가 들어왔다면, 유효한 시간대가 아닙니다.
    messageContainer.innerHTML = `<h3>유효한 시간대가 아닙니다.</h3>`;
    container.style.display = "none";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainObj = {
    remainingDate: Math.floor(remaining / 3600 / 24), // 일자
    remainingHours: Math.floor(remaining / 3600) % 24, // 시간
    remainingMin: Math.floor(remaining / 60) % 60, // 분
    remainingSec: Math.floor(remaining) % 60, // 초
  };

  let i = 0;
  const timeKeys = Object.keys(remainObj);
  const documentArr = ["days", "hours", "min", "sec"];

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  for (let tag of documentArr) {
    const remainingTime = format(remainObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = function (targetDateInput) {
  console.log(targetDateInput);
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }

  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput);
  const InterverId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000); // 반복중인 코드의 ID가 리턴값임.
  console.log(InterverId);
  InterverIdArr.push(InterverId);
};

window.onload = function () {
  if (savedDate) {
    starter(savedDate);
  } else {
    container.style.display = "none";
    messageContainer.innerHTML = `<h3>D-day를 입력해주세요.</h3>`;
  }
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");

  for (let i = 0; i < InterverIdArr.length; i++) {
    clearInterval(InterverIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>";
  messageContainer.style.display = "flex";

  setClearInterval();
};
