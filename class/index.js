// 클래스와 기본 문법
/*
    클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태
    (멤버변수)와 메서드(함수)로 구성된다.
*/

// 기본문법
/*
class MyClass{
    constructor(){...}
    method1(){...}
    method2(){...}
    method3(){...}
}
*/

class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}

var user = new User("John");
user.sayHi();


class User2{
    constructor(name){
        // setter를 활성화합니다.
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
}

var user = new User2("보라");
console.log(user.name);

user = new User(""); // 이름이 너무 짧습니다.