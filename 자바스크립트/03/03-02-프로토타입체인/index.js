const myObject = {
    city: "Madrid",
    greet(){
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();
console.log(myObject.toString());

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

/*
  Object.getPrototypeOf()
  : 지정된 객체의 프로토타입(가령 내부 [prototype]속성값)을 반환한다.
*/