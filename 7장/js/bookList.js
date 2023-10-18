// 제목요소
const title = document.querySelector("#title");
// 저자요소
const author = document.querySelector("#author");
// 저장버튼
const save = document.querySelector("#save");
// 정보 표시 영역
const bookList = document.querySelector("#bookList");

// 버튼을 클릭하면...
save.addEventListener("click", (e) => {
    e.preventDefault(); //버튼을 누르면 서버로 보내지 않는다.
    // 제목과 저자 정보를 출력
    // 리스트 요소를 만들기
    const item = document.createElement("li");

    //item에 내용 넣기
    item.innerHTML = `${title.value} - ${author.value} <span class=delBtn>삭제</span>`;
    
    // 정보 영역에 추가
    bookList.appendChild(item);

    // input text 상자의 내용 지우기.
    title.value = "";
    author.value = "";

    // 목록에서 제거하기
    // 삭제 버튼 요소를 모두 가져온다.
    const delBtn = document.querySelectorAll(".delBtn");

    // for(btn of delBtn)
    // btn.addEventListener("click", function() {
    //     this.parentNode.remove();
    // });
});
// 정보출력
