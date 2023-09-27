// 함수 선언.
function greeting() {
    console.log("안녕하세요.");
}
setInterval(greeting, 2000);    //콜백 함수 greeting에는 ()를 사용하지 않는다.

// 직접 함수를 선언하여 실행
setInterval(() => {
    console.log("박민재입니다.");
},3000);