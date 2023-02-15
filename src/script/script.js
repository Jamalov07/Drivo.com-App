"use strict";
let theme = document.querySelector(".theme");
let mode = document.querySelector(".mode");
let bottom = document.querySelectorAll(".bottom");

theme.addEventListener("click", () => {
  changeTheme();
});

function changeTheme() {
  if (document.body.classList.contains("text-white")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  document.body.classList.toggle("bg-[#1C1C1C]");
  document.body.classList.toggle("text-white");
  mode.classList.toggle("bg-[#272727]");
  mode.classList.toggle("bxs-sun");
  mode.classList.toggle("bxs-moon");
  mode.classList.toggle("bg-[#F5F5F5]");
  bottom.forEach((bot) => {
    if (bot.getAttribute("src") === "./images/Iconwhite.svg") {
      bot.setAttribute("src", "./images/Icon (1).svg");
    } else {
      bot.setAttribute("src", "./images/Iconwhite.svg");
    }
  });
}

let themeInLocalStorage = localStorage.getItem("theme");

if (themeInLocalStorage == "dark") {
  null;
} else {
  changeTheme();
}

theme.addEventListener("mouseover", () => {
  mode.classList.toggle("text-[#555555]");
});

theme.addEventListener("mouseout", () => {
  mode.classList.toggle("text-[#555555]");
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const indikators = document.querySelectorAll(".indi");

left.addEventListener("click", () => {
  console.log(indikators);
  indikators.forEach((indi, index) => {
    console.log(index);
    if (indi.classList.contains("w-6") && index != 0) {
      indikators[index].classList.toggle("w-6");
      indikators[index].classList.toggle("w-2");
      indikators[index - 1].classList.toggle("w-2");
      indikators[index - 1].classList.toggle("w-6");
    }
  });
});

right.addEventListener("click", () => {
  let count = 0;
  console.log(indikators);
  indikators.forEach((indi, index) => {
    console.log(index);
    if (indi.classList.contains("w-6") && index != 2) {
      if (count == 0) {
        console.log(indi);
        indikators[index].classList.toggle("w-6");
        indikators[index].classList.toggle("w-2");
        indikators[index + 1].classList.toggle("w-2");
        indikators[index + 1].classList.toggle("w-6");
        count++;
      }
    }
  });
});

let aboutUs = document.querySelector(".aboutus");
let helpCenter = document.querySelector(".helpcenter");
let aboutFirstDiv = aboutUs.querySelector("div");
let helpFirstDiv = helpCenter.querySelector("div");

aboutFirstDiv.addEventListener("click", () => {
  let arrowtop = aboutUs.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  let options = aboutUs.querySelector(".options");
  options.classList.toggle("hidden");
  options.classList.toggle("flex");
});

// aboutUs.addEventListener("mouseover", () => {
//   let options = aboutUs.querySelector("div");
//   options.classList.remove("hidden");
// });

// aboutUs.addEventListener("mouseout", () => {
//   let options = aboutUs.querySelector("div");
//   options.classList.add("hidden");
// });

helpFirstDiv.addEventListener("click", () => {
  let arrowtop = helpCenter.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  let options = helpCenter.querySelector(".options");
  options.classList.toggle("hidden");
  options.classList.toggle("flex");
});

// helpCenter.addEventListener("mouseover", () => {
//   let options = helpCenter.querySelector("div");
//   options.classList.remove("hidden");
// });

// helpCenter.addEventListener("mouseout", () => {
//   let options = helpCenter.querySelector("div");
//   options.classList.add("hidden");
// });

let navbar = document.querySelector(".navbar");

navbar.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("px-4")) {
    if (document.body.classList.contains("text-white")) {
      e.target.classList.add("hover:bg-[#272727]");
    } else {
      e.target.classList.add("hover:bg-[#F5F5F5]");
    }
  }
});

let raqam = document.querySelector(".raqam");

raqam.addEventListener("mouseover", () => {
  if (document.body.classList.contains("text-white")) {
    raqam.classList.add("hover:bg-[#272727]");
  } else {
    raqam.classList.add("hover:bg-[#F5F5F5]");
  }
});

let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("mousedown", () => {
  //   console.log(img);
  let img = btnLogin.querySelector("img");
  //   img.src = "./images/Login1.svg";
  img.setAttribute("src", "./images/Login1.svg");
});

btnLogin.addEventListener("mouseup", () => {
  let img = btnLogin.querySelector("img");
  img.setAttribute("src", "./images/Login.svg");
});

let modal = document.querySelector(".modal");

btnLogin.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

let emailInput = document.querySelector(".email");
let emaillabel = document.querySelector(".emaillabel");

let passwordInput = document.querySelector(".password");
let passwordlabel = document.querySelector(".passwordlabel");

emailInput.addEventListener("focus", () => {
  //   emaillabel.classList.remove("border-[2px]");
  //   emaillabel.classList.remove("border-[#E5E7EA]");
  emaillabel.classList.add("border-2");
  emaillabel.classList.add("border-[#299764]");
});

passwordInput.addEventListener("focus", () => {
  passwordlabel.classList.add("border-2");
  passwordlabel.classList.add("border-[#299764]");
});

let eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  if (eye.getAttribute("src") == "./images/eye.svg") {
    eye.setAttribute("src", "./images/Iconeye.svg");
    passwordInput.setAttribute("type", "text");
  } else {
    eye.setAttribute("src", "./images/eye.svg");
    passwordInput.setAttribute("type", "password");
  }
});

let cancellogin = document.querySelector(".cancellogin");

cancellogin.addEventListener("click", () => {
  modal.classList.add("hidden");
});

let contactus = document.querySelector(".contactus");
let faq = document.querySelector(".faq");

let locations = document.querySelector(".locations");
let careers = document.querySelector(".careers");
let news = document.querySelector(".news");

contactus.addEventListener("click", () => {
  let arrowtop = contactus.parentNode.parentNode.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  contactus.parentNode.classList.add("hidden");
});
faq.addEventListener("click", () => {
  let arrowtop = faq.parentNode.parentNode.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  faq.parentNode.classList.add("hidden");
});

news.addEventListener("click", () => {
  let arrowtop = news.parentNode.parentNode.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  news.parentNode.classList.add("hidden");
});

careers.addEventListener("click", () => {
  let arrowtop = careers.parentNode.parentNode.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  careers.parentNode.classList.add("hidden");
});

locations.addEventListener("click", () => {
  let arrowtop = locations.parentNode.parentNode.querySelector("img");
  arrowtop.classList.toggle("rotate-180");
  locations.parentNode.classList.add("hidden");
});

document.body.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   console.log(e.target.parentNode.parentNode);
  if (
    (e.target.innerHTML !== "Help center" &&
      e.target.innerHTML == "About us") ||
    (e.target.innerHTML !== "Help center" &&
      e.target.parentNode.parentNode.classList.contains("aboutus"))
  ) {
    let options = helpCenter.querySelector(".options");
    options.classList.add("hidden");
    let arrowtop = helpCenter.querySelector("img");
    arrowtop.classList.remove("rotate-180");
  }
  if (
    (e.target.innerHTML !== "About us" &&
      e.target.innerHTML == "Help center") ||
    (e.target.innerHTML !== "Help center" &&
      e.target.parentNode.parentNode.classList.contains("helpcenter"))
  ) {
    let options = aboutUs.querySelector(".options");
    options.classList.add("hidden");
    let arrowtop = aboutUs.querySelector("img");
    arrowtop.classList.remove("rotate-180");
  } else if (
    e.target.innerHTML !== "About us" &&
    e.target.innerHTML !== "Help center" &&
    e.target.alt !== "bottom"
  ) {
    let options = helpCenter.querySelector(".options");
    options.classList.add("hidden");
    let arrowtop = helpCenter.querySelector("img");
    arrowtop.classList.remove("rotate-180");
    let options1 = aboutUs.querySelector(".options");
    options1.classList.add("hidden");
    let arrowtop1 = aboutUs.querySelector("img");
    arrowtop1.classList.remove("rotate-180");
  }
});

let modalContent = document.querySelector(".modal-content");

modalContent.addEventListener("click", (e) => {
  if (e.target.id !== "email" && e.target.id !== "password") {
    passwordlabel.classList.remove("border-2");
    passwordlabel.classList.remove("border-[#299764]");
    emaillabel.classList.remove("border-2");
    emaillabel.classList.remove("border-[#299764]");
  } else if (e.target.id !== "email" && e.target.id === "password") {
    emaillabel.classList.remove("border-2");
    emaillabel.classList.remove("border-[#299764]");
  } else if (e.target.id === "email" && e.target.id !== "password") {
    passwordlabel.classList.remove("border-2");
    passwordlabel.classList.remove("border-[#299764]");
  }
});
