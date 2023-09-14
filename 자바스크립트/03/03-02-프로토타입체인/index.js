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