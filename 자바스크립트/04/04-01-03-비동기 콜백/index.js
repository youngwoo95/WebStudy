// 콜백
/*
    이벤트 핸들러는 특정 유형의 콜백이다.
    콜백은 적절한 시간에 콜백이 호출될 것으로 기대하면서 다른 함수에 전달되는 함수일 뿐이다.
*/

function dostep1(init){
    const result = init + 1;
    callback(result);
}

function dostep2(init){
    const result = init + 2;
    callback(result);
}

function dostep3(init, callback){
    const result = init + 3;
    callback(result);
}

function doOperation(){
    dostep1(0, (result1) => {
        dostep2(result1, (result2) =>{
            dostep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}

doOperation();
