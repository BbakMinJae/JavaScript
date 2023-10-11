const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    modalBox.classList.toggle("active");    //css에 있는 active를 통해 '프로필 보기' 클릭 시 화면에 모달박스를 화면에 표시
});

close.addEventListener("click", () => {
    modalBox.classList.toggle("active");
});