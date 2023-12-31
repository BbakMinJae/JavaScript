// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 프롬프트로 화씨 온도 입력 받는다.
// 섭씨 온도 계산하고, 출력한다.
// 출력은 alert() 또는 document.write() 중 하나 선택.
// 화씨 온도 00도는 섭씨 온도 00도 입니다.

// 내 풀이
// let fah = parseFloat(prompt("화씨 온도를 입력하시오"));

// function temparatureChange() {
//     let cel = (fah - 32) / 1.8;
//     alert(`화씨 온도 ${fah}도는 섭씨 온도 ${cel}도 입니다.`);
// }

// temparatureChange();

// 교수님 풀이
// 1. 화씨 온도 입력 받기 - 실수형으로 변환
let fah = parseFloat(prompt("화씨 온도를 입력하시오"));

// 2. 섭씨 온도 계산하기
let cel = (fah - 32) / 1.8;

// 3. 출력하기.
alert(`화씨 온도 {fah}도는 섭씨 온도 $${cel.toFixed(1)}도 입니다.`);
document.write(`화씨 온도 ${fah}도는 섭씨 온도 ${cel.toFixed(1)}도 입니다.`);