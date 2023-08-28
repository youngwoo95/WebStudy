const checkvalidation = function () {
    let email = document.getElementById("email").value;
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;

    // 빈문자 여부 체크
    if (email !== "" && pw1 !== "" && pw2 !== "") {
        // 모든 input이 비어있지 않을 경우
        document.getElementById("submit").disabled = false;

    }
    else {
        // 하나라도 비어있을 경우
        document.getElementById("submit").disabled = true;
    }
}


