const popUpBtnElement = document.getElementById("pop-up-button");

console.log(popUpBtnElement)

function showPopUp() {
    const popUpElement = document.getElementById("pop-up-message");
    popUpElement.style.display = "block";
}

popUpBtnElement.addEventListener("click", showPopUp);



