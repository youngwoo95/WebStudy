/* 클래스 */

// 클래스 및 생성자
console.log("===== 클래스 및 생성자 =====");
class Person{
    name;
    
    // 생성자
    constructor(name){
        this.name = name;
    }

    // 함수
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const giles = new Person("Giles");
giles.introduceSelf();

// 생성자 생략 : 특별한 초기화를 수행할 필요가 없는 경우 생성자를 생략하면 기본 생성자가 생성된다.
console.log("===== 생성자 생략 =====");
class Animal {
    sleep(){
        console.log("zzzzzz");
    }
}

const spot = new Animal();
spot.sleep();

// 계승(상속)
console.log("===== 상속 =====");
class Professor extends Person{
    teaches;

    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }

    
    introduceSelf(){
        console.log(`My name ${this.name}, and I will be your ${this.teaches} professor.`);
    }
    
    grade(paper){
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();
walsh.grade("my Paper");

// 캡슐화
console.log("===== 캡슐화 =====");
class Student extends Person {
    #year;

    constructor(name, year){
        super(name);
        this.#year = year;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery(){
        return this.#year > 1;
    }
}

const summers = new Student("Summers",2);
summers.introduceSelf();
summers.canStudyArchery();

// 이 클래스 선언에서 #year은 개인 데이터 속성이다.
// 객체를 생성 하고 내부적으로 사용할 수 있지만 객체 외부의 코드가 브라우저에 액세스하려고 하면 오류가 발생한다.
// 프라이빗 데이터 속성은 클래스 선언에서 선언되어야 하며 해당 이름은 # 으로 시작한다.
//console.log(summers.#year);

// 비공개 메서드
// 개인 데이터 속성뿐만 아니라 개인 메서드도 가질 수 있다. 개인 데이터 속성과 마찬가지로 해당 이름은 # 로 시작하며 #객체 자체 메서드로만 호출할 수 있다.
console.log("==== 비공개 메서드 ====");

class Example{
    somePublicMethod(){
        this.#somePrivatemethod();
    }

    #somePrivatemethod(){
        console.log("You called me?");
    }
}

const myExample = new Example();
myExample.somePublicMethod();
myExample.#somePrivateMethod();