// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수.
function calcMul(num1, num2) {
    return num1 * num2;
}

let num1 = parseInt(prompt("첫번째 수를 입력하시오."))
let num2 = parseInt(prompt("두번째 수를 입력하시오."))

document.write(`${num1} x ${num2} = ${calcMul(num1, num2)}입니다.`);