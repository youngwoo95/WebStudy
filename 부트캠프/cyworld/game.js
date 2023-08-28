/*
1. 단어를 입력하고 버튼을 누르면
2. input 태그의 값을 읽는다
3. 제시어의 끝글자와 입력값의 첫 글자를 비교한다.
4. 제시어의 끝 글자와 입력값의 첫 글자가 같으면 결과란에
    "정답입니다!"를 표시하고, 제시어를 입력값으로 변경한다.
5. 제시어의 끝 글자와 입력값의 첫 글자가 다르면 결과란에 "땡"을 표시하고
    제시어는 변경하지 않는다.
*/

const startword = () => {
    let myword = document.getElementById("myword").value;
    let word = document.getElementById("word").innerText;

    // 제시어의 마지막 글자를 가져오는 방법
    var lastword = word[word.length - 1];

    // 입력값의 첫 글자를 가져오는 방법
    let firstword = myword[0];

    // 정답일때
    if (lastword === firstword) {
        document.getElementById("result").innerText = "정답입니다!";
        document.getElementById("word").innerText = myword;
        document.getElementById("myword").value = "";
    } else {
        document.getElementById("result").innerText = "오답입니다!";
        document.getElementById("myword").value = "";
    }

}
