const imgBox = document.querySelector("#container > img"); //부모 > 자식 요소가져오기

imgBox.addEventListener("mouseover", function() {
    imgBox.src="images/pic-6.jpg";
});

imgBox.addEventListener("mouseout", () => {
    imgBox.src="images/pic-1.jpg";
});