async function f(){
    return 1;
}

// function 앞에 async 를 붙이면 해당 함수는 항상 프라미스를 반환한다.
console.log(f().then());

// 명시적으로 프라미스를 반환하는것도 가능함.
async function f1(){
    return Promise.resolve(1);
}

console.log(f1().then());


// await
// await는 async 함수 안에서만 동작한다.
// await 키워드를 만나면 프라미스가 처리될 때까지 기다린다, 결과는 그 이후 반환된다.
async function f2(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("완료"), 1000);
    });

    let result = await promise;

    console.log(result);
}

f2();

// 에러 핸들링
