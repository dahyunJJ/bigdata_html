//  모든 조건을 만족할 때, form 제출 가능하도록
let idVeri = (pwVeri = pwChkVeri = false); // 복합대입연산자 let a = b = c = true;
console.log(idVeri, pwVeri, pwChkVeri);

// 아이디
let userId = document.getElementById("userid");
let idWarn = document.querySelector(".id-wran");

// keyup : 키를 눌렀다가 놨을 때 발생하는 이벤트
// focusout : 포커스(커서)가 아웃될 때 발생하는 이벤트
userId.addEventListener("focusout", () => {
  if (userId.value.length < 8) {
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하세요.</span>`;
  } else {
    idWarn.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>`;
    idVeri = true;
  }

  // 다른 방법
  // let idchk = document.querySelector(".idchk");
  // let idTxt = document.createElement("p");
  // if (userId.value.length < 8) {
  //   idTxt.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하세요.</span>`;
  //   idchk.appendChild(idTxt);
  // } else {
  //   idTxt.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>`;
  //   idchk.appendChild(idTxt);
  // }
});

// 비밀번호
let userPw = document.getElementById("userpw");
let pwWarn = document.querySelector(".pw-warn");

userPw.addEventListener("focusout", () => {
  let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;

  // text() : 정규식 일치 여부를 Boolean 값으로 반환
  if (!pwdCheck.test(userPw.value)) {
    pwWarn.innerHTML = `<span class="txt-red">8~16자 영문과 숫자, 특수기호를 사용하세요.</span>`;
  } else {
    pwWarn.innerHTML = ``;
    pwVeri = true;
  }
});

// 비밀번호 재확인
let pwChk = document.getElementById("user-pwchk");
let pwChkWarn = document.querySelector(".pwchk-warn");

pwChk.addEventListener("focusout", () => {
  if (pwChk.value !== userPw.value) {
    pwChkWarn.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다.</span>`;
  } else {
    pwChkWarn.innerHTML = ``;
    pwChkVeri = true;
  }
});

// 생년월일
let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");

let kst = new Date();
let getYear = kst.getFullYear();

for (i = 1920; i <= getYear; i++) {
  let options = `<option>${i}</option>`;
  year.insertAdjacentHTML("beforeend", options);
}
for (i = 1; i <= 12; i++) {
  let options = `<option>${i}</option>`;
  month.insertAdjacentHTML("beforeend", options);
}
for (i = 1; i <= 31; i++) {
  let options = `<option>${i}</option>`;
  date.insertAdjacentHTML("beforeend", options);
}

// 취미
// 최대 5개까지만 체크되도록
let checkBoxs = document.querySelectorAll(
  'input[type="checkbox"][name="hobby"]'
);
let maxCount = 5;

checkBoxs.forEach((item) => {
  item.addEventListener("change", () => {
    let checkCount = document.querySelectorAll(
      'input[type="checkbox"][name="hobby"]:checked'
    ).length;
    // console.log(checkCount);
    if (checkCount > maxCount) {
      alert("최대 5개까지만 선택할 수 있습니다.");
      item.checked = false; // 6번째 체크박스 체크 해제
    }
  });
});

// 제출 버튼
let submitBtn = document.getElementById("submit-btn");
let joinForm = document.getElementById("join-form");

submitBtn.addEventListener("click", (e) => {
  if (idVeri && pwVeri && pwChkVeri) {
    joinForm.submit();
  } else {
    e.preventDefault(); // 기본 속성 제거
  }
});
