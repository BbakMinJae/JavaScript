const btn = document.querySelector("body > button");

btn.addEventListener("click", () => {
        //새로운 p 요소 만들기
        let newP = document.createElement("p");
    
        //텍스트 노드 만들기
        let textNode = document.createTextNode("안녕하세요");
    
        //p의 자식으로 텍스트 추가하기(연결)
        newP.appendChild(textNode);

        //Javascript를 기준으로
        let basicNode = document.querySelectorAll("p")[2];

        //앞에 추가하기
        document.body.insertBefore(newP, basicNode);
}, {once : true});  //클릭하면 한 번만 나오기