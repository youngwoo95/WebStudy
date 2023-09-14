// 비동기 작업 - Promise
/*
    Promise는 작업의 현재 상태를 나타내는 비동기 함수에 의해 반환되는 개체이다.
    Promise가 호출자에게 반환될 때 작업이 완료되지 않는 경우가 많지만 Promise 개체는 작업의 최종 성공 또는 실패를 처리하는 메서드를 제공한다.
*/

// fetch() API 사용
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  console.log(fetchPromise);

  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });

  console.log("Started request..");