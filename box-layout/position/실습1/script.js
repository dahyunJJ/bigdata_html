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

// sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarOpenBtn = document.querySelector(".sidebar-open-btn");
let sidebarCloseBtn = document.querySelector(".sidebar-close-btn");

// sidebarOpenBtn.addEventListener("click", () => {
//   sidebar.classList.add("is-active");
// });

// sidebarCloseBtn.addEventListener("click", () => {
//   sidebar.classList.remove("is-active");
// });

// 함수 생성 및 호출 방법
function openSidebar() {
  // 1. sidebar 라는 클래스에 is-active 클래스 추가
  sidebar.classList.add("is-active");
}

function closeSidebar() {
  // 2. sidebar 라는 클래스에 is-active 클래스 제거
  sidebar.classList.remove("is-active");
}

sidebarOpenBtn.addEventListener("click", openSidebar);
sidebarCloseBtn.addEventListener("click", closeSidebar);
