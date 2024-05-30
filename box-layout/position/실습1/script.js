// JavaScript 변수명 (낙타표기법)
let popup = document.querySelector(".popup");
let popupOpenBtn = document.querySelector(".popup-open-btn");
let popupCloseBtn = document.querySelector(".popup-close-btn");

popupOpenBtn.addEventListener("click", () => {
  popup.classList.add("is-active");
});

popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("is-active");
});
