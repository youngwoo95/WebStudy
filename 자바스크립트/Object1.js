const jasonData = {
    name: '홍길동',
    gender: 'Male',
    age: 25
}

console.log(jasonData.name);
console.log(jasonData["name"]);

// ====================================

console.log(Object.keys(jasonData));

// 배열로 Key 반환됨.
let temp = Object.keys(jasonData);
// 받은 배열변수에 0번 인덱스를 반환해본다.
console.log(temp[0]);
// 데이터 포함 여부를 묻는다.
console.log(temp.includes('name'));

// 배열로 Value 반환됨
let temp2 = Object.values(jasonData);
// 받은 배열변수에 0번 인덱스를 반환해준다.
console.log(temp2[0]);
// 데이터 포함 여부를 묻는다
console.log(temp2.includes('홍길동'));

let temp3 = Object.values(jasonData);
console.log(temp3);
// 배열에 배열을 넣는다.
temp3.favoriteFood = ['rice', 'noodle', 'chicken'];
console.log(temp3);

/*
    [배열 정의]
    1. 순서가 존재하는 데이터의 창고
    2. 대괄호로 생성
    3. 각각의 요소는 쉼표로 구분
    4. 0부터 시작하는 위치 데이터 Index 
            -> 이를 활용해서 요소에 접근

    [배열 속성]
    length : 배열에 존재하는 요소의 개수를 기반으로 해당 배열의 길이를 담은 속성

    [배열 메서드]
    push() : 데이터 추가
    pop() : 데이터 삭제
    indexOf() : Index 조회
    includes() : 포함여부 확인


    [객체 정의]
    1. 중괄호를 사용해서 정의
    2. 내부의 요소는 프로퍼티(키 + 값)
    3. Dot notation, Bracket notation
    4. 위 두가지로 새로운 프로퍼티도 생성

    [객체 메서드]
    1. Object.keys() : key 모음을 배열로 (문자열로)
    2. Object.values() : value 모음을 배열로 (데이터 그대로)
    
*/