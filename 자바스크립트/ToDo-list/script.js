const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");

const createTodo = function () {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
  });

  console.log(newBtn);

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);

  newLi.appendChild(newSpan);
  todolist.appendChild(newLi);
  todoInput.value = "";

  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
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
  console.log(saveItems);
};
