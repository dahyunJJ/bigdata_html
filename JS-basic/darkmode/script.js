let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let btn = document.querySelector(".btn");
let text = document.querySelector(".btn").innerHTML;
// console.log(text);

// btn.addEventListener("click", () => {
//   header.classList.add("dark-mode");
//   btn.innerHTML = `Dark`;
// });

function modeToggle() {
  if (text == "Light") {
    btn.innerHTML = `Dark`;
    console.log(btn.innerHTML);
    header.classList.add("dark-mode");
  } else {
    btn.innerHTML = `Light`;
    console.log(btn.innerHTML);
    header.classList.remove("dark-mode");
  }
}

btn.addEventListener("click", modeToggle);
