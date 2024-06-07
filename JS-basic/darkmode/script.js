// 1. btn 요소 안의 텍스트를 가져온다.
// 2. 텍스트가 Dark일 경우 (조건)
// 3. btn을 클릭하면 (클릭 이벤트) 텍스트를 'Light'로 바꾼다.
// 4. header 태그에 dark-mode 클래스 add

let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let btn = document.querySelector(".btn");

// function modeToggle() {
//   let modeTxt = btn.innerHTML;

//   if (modeTxt == "Dark") {
//     header.classList.add("dark-mode");
//     btn.innerHTML = `Light`;
//   } else {
//     header.classList.remove("dark-mode");
//     btn.innerHTML = `Dark`;
//   }
// }

// 카운트 횟수로 모드 변경

let count = 0;

function modeToggle() {
  count = count + 1; // count += 1;
  console.log(count);

  if (count % 2 == 1) {
    header.classList.add("dark-mode");
    btn.innerHTML = `Light`;
  } else if (count % 2 == 0) {
    header.classList.remove("dark-mode");
    btn.innerHTML = `Dark`;
  }
}

btn.addEventListener("click", modeToggle);
