const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");

const saveTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.content;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todolist.appendChild(newLi);
  todoInput.value = "";

  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  // 로컬스토리지 저장
  const saveItems = [];
  for (let i = 0; i < todolist.children.length; i++) {
    const todoObj = {
      content: todolist.children[i].querySelector("span").textContent,
      complete: todolist.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  if (saveItems.length === 0) {
    localStorage.removeItem("saved-items");
  } else {
    // console.log(String(saveItems));
    console.log(JSON.stringify(saveItems)); // JSON 변환
    localStorage.setItem("saved-items", JSON.stringify(saveItems));
  }
};

if (saveTodoList) {
  for (let i = 0; i < saveTodoList.length; i++) {
    createTodo(saveTodoList[i]);
  }
}

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);

  // shorthand property
  const positionObj = {
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (error) => {
    console.log(error);
  });
};
askForLocation();

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];

  weather = weatherMainList.includes(weather) ? weather : "Fog";

  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }

  // if (weatherMainList.includes(weather)) {
  //   document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;
  // }
  //  else {
  //   document.body.style.backgroundImage = `url('./images/Fog.jpg')`;
  // }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d20c89b987c68c75aed8dd66fee8c34a`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
        // weather: "Fog133",
      };
      weatherDataActive(weatherData);
    })
    .catch((error) => {
      console.log(error);
    });
};

// const promiseTest = function () {
//   return new Promise((resolver, reject) => {
//     setTimeout(() => {
//       resolver("success"); // 성공했을 때 사용
//       // reject("error"); // 실패했을 때 사용
//     }, 5000);
//   });
// };

// promiseTest().then((res) => {
//   console.log(res);
// });
