//내 풀이
// let num = parseInt(prompt("숫자 입력"));

// if(num % 3 === 0) alert(`${num}은 3의 배수입니다.`)
// else alert(`${num}은 3의 배수가 아닙니다.`)

// 교수님 풀이
let userNumber = prompt("숫자를 입력하시오.");

if(userNumber != null) {
    userNum = parseInt(userNumber);
    if(userNum % 3 === 0) {
        alert(userNum + "은(는) 3의 배수입니다.");
    }
    else {
        alert(userNum + "은(는) 3의 배수가 아닙니다.");
    }
}
else {
    alert("입력이 취소되었습니다.");
}