 // 1. 문자열 변수 선언
  설명: 이름을 저장하는 name 이라는 변수를 선언하고, 타입을 지정하세요. 값은 "Alice"로 지정하세요.

 // 2. 숫자와 boolean 타입
  설명: 나이를 나타내는 age 변수는 숫자 타입
       학생 여부를 나타내는 isStudent는 boolean 타입으로 지정하고 값을 각각 21, true로 설정하세요.

 // 3. 함수 매개변수와 반환 타입
  설명: 두 숫자를 받아서 더한 값을 반환하는 함수 add를 작성하세요. 매개변수와 반환값에 모두 타입을 지정하세요.

 // 4. 배열 타입
  설명: 숫자로 구성된 점수 배열 scores를 선언하고, 타입을 지정하세요. 값은 [80, 90, 100]으로 설정하세요.

 // 5. 객체 타입 정의
  설명: 사람을 나타내는 객체 Person을 선언하세요.
       이름: 문자열
       나이: 숫자 객체 리터럴에 타입을 직접 지정하세요.

 // 6. 유니언 타입
  설명: id라는 변수는 숫자이거나 문자열일 수 있습니다. 적절한 타입으로 선언하고, "user123"을 할당하세요.


// 1. 문자열 변수 선언
let myName: string = "Alice";

// 2. 숫자와 boolean 타입
let age: number = 21;
let isStudent: boolean = true;

// 3. 함수 매개변수와 반환 타입
function add(a: number, b: number): number {
  return a + b;
}

// 4. 배열 타입
let scores: number[] = [80, 90, 100];

// 5. 객체 타입 정의
let person: { name: string; age: number } = {
  name: "Alice",
  age: 21
};

// 6. 유니언 타입
let id: number | string = "user123";
