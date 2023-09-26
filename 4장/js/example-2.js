// 두 수를 전달 받아 곱셈하는 화살표 함수 정의
let mul = (num1, num2) => {
    return num1 * num2; //return 생략 가능
}

// 두 정수 입력 받기
let num1 = parseInt(prompt("첫 번째 정수 입력 : "));
let num2 = parseInt(prompt("두 번째 정수 입력 : "));

// 결과 화면에 출력하기
document.write(`<h2>${num1} 과 ${num2} 의 곱은 ${mul(num1, num2)}입니다.<h2>`);