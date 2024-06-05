// html #hello 찾아오기
let hello = document.getElementById("hello");
let changeBtn = document.getElementById("txt-change-btn");

hello.innerHTML = `안녕?`;
hello.style.color = `red`;

// changeBtn 클릭 했을 때, html 'Hello', color -> blue 로 변경
changeBtn.addEventListener("click", () => {
  hello.innerHTML = `Hello!`;
  hello.style.color = "blue";
});

// querySelectorAll : 같은 클래스명을 가진 요소를 모두 찾는다.
let items = document.querySelectorAll(".item");

// Vanilla Js
items[0].style.color = `blue`;
items[1].style.color = `blue`;
items[2].style.color = `blue`;

// j-Query
$(".item").css("color", "green");

// 반복문 for
for (let i = 0; i < items.length; i++) {
  items[i].innerHTML = `for 반복문`;
  // console.log(i);
}

// 배열 반복 forEach
items.forEach((item) => {
  // console.log("forEach : ", item);
  item.innerHTML = `forEach 반복문`;
});

// 자료형
// number
let num = 5;
// string
let num1 = "5";
let txt = "텍스트";

// 숫자, 문자, 변수
console.log(num1);
console.log(typeof num1);
console.log(typeof "txt");
console.log(typeof txt);

// Array(배열), Object(객체)
// 여러 값을 한 번에 담을 때
// Array : []
// Object : {}

let arr = ["dahyun", 1234, "ㅎㅎ", txt];
// 배열에서 원하는 값 가져오기 => 배열이름[숫자]
console.log("arr : ", arr[0]);

// {key : value}
let tel = 1012345678;
let obj = {
  이름: "dahyun",
  전화: tel,
  주소: "대전광역시 유성구",
};

// 배열에서 원하는 값 가져오기 => obj.key
console.log(obj.전화);

// 변수, 문자열
// `` backtick ${변수명}
let hi = "안녕하세요 저는";
let name = "정다현";

let my = hi + name + "입니다";
let my1 = `안녕하세요 저는 ${name}입니다`;

console.log("my1 : ", my1);

// 매개변수(parameter)로 이름값
function info(myName) {
  console.log(`안녕하세요 저는 ${myName} 입니다`);
}

info("jeong");

// 문자열 사이에 변수 바인딩하는 방법
// + : 변수 + '문자열'
// '안녕' + name(변수) + '나는' + age(변수)
// `` : `안녕 ${name} 나는 ${age}

// Parameter(매개변수)
// 함수를 호출 할 때 함수에 넘겨주는 값
