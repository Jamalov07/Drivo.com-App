"use strict";
let theme = document.querySelector(".theme");
let mode = document.querySelector(".mode");
let bottom = document.querySelectorAll(".bottom");
let cards = document.querySelectorAll(".card");
let header = document.querySelector("header");
let commentSection = document.querySelector(".comment-section");
let community = document.querySelector(".community");
let swippers = document.querySelectorAll(".swip");
let swipperWrap = document.querySelector(".swipper-wrap");
let btns = document.querySelectorAll(".btns");

const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};

const cars = [
  {
    id: 1,
    title: "Ford Fiesta",
    subtitle: "Economy Car",
    link: "./images/image 13.png",
    type: "compact",
  },
  {
    id: 2,
    title: "Nissan Versa",
    subtitle: "Compact Car",
    link: "./images/image 13 (1).png",
    type: "compact",
  },
  {
    id: 3,
    title: "Toyota Corolla",
    subtitle: "Mid-size Car",
    link: "./images/image 13 (2).png",
    type: "compact",
  },
  {
    id: 4,
    title: "Nissan Roque",
    subtitle: "Mid-size SUV",
    link: "./images/image 13 (3).png",
    type: "compact",
  },
  {
    id: 5,
    title: "Chevy Traverse",
    subtitle: "Full-size SUV",
    link: "./images/image 13 (4).png",
    type: "compact",
  },
  {
    id: 6,
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    link: "./images/image 13 (5).png",
    type: "compact",
  },
  {
    id: 7,
    title: "Royce rolls ghost",
    subtitle: "Full-size Car",
    link: "./images/image 13 (10).png",
    type: "Sports cars",
  },
  {
    id: 8,
    title: "Mercedes s class",
    subtitle: "Full-size Car",
    link: "./images/image 13 (1) (1).png",
    type: "Sports cars",
  },
  {
    id: 9,
    title: "Lamborghini",
    subtitle: "Mid-size Car",
    link: "./images/image 13 (2) (1).png",
    type: "Sports cars",
  },
  {
    id: 10,
    title: "Mercedes g63amg",
    subtitle: "Mid-size SUV",
    link: "./images/image 13 (3) (1).png",
    type: "Sports cars",
  },

  {
    id: 11,
    title: "15-Passenger Ford Transit ",
    subtitle: "Full-size Car",
    link: "./images/image 13 (4) (1).png",
    type: "Vans",
  },
  {
    id: 12,
    title: "Chrysler Pacifica",
    subtitle: "Full-size Car",
    link: "./images/image 13 (5) (1).png",
    type: "Vans",
  },
  {
    id: 13,
    title: "Chevy Silverado 4500HD",
    subtitle: "Mid-size Car",
    link: "./images/image 13 (6).png",
    type: "Vans",
  },
  {
    id: 14,
    title: "12-Passenger Ford Transit",
    subtitle: "Full-size SUV",
    link: "./images/image 13 (7).png",
    type: "Vans",
  },
  {
    id: 15,
    title: "15-Passenger Ford Transit ",
    subtitle: "Mid-size SUV",
    link: "./images/image 13 (8).png",
    type: "Vans",
  },
  {
    id: 16,
    title: "Mercedes-Benz Sprinter",
    subtitle: "Mid-size SUV",
    link: "./images/image 13 (9).png",
    type: "Vans",
  },
];

// let wrapperCardds = document.querySelector(".wrapper-cardds");
let cardds = document.querySelectorAll(".cardd");
// console.log(wrapperCardds.children);
let keepWrapper = document.querySelector(".keep-wrapper");
let safeCars = document.querySelectorAll(".safe");
let icons = document.querySelectorAll(".icon");

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
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.toggle("bg-[#272727]");
    card.classList.toggle("text-black");
    card.classList.toggle("bg-[#F5F5F5]");
  });

  header.classList.toggle("border-[#333333]");
  header.classList.toggle("border-[#E5E7EA]");
  commentSection.classList.toggle("bg-[#272727]");
  commentSection.classList.toggle("bg-[#F5F5F5]");
  community.classList.toggle("bg-[#1C1C1C]");
  community.classList.toggle("bg-white");
  swipperWrap.classList.toggle("text-white");
  swippers.forEach((card) => {
    console.log(card);
    card.firstElementChild.classList.toggle("bg-[#1C1C1C]");
    card.firstElementChild.classList.toggle("bg-white");
  });

  btns.forEach((btn) => {
    btn.classList.toggle("border-[#E5E7EA]");
    btn.classList.toggle("border-[#333333]");
  });

  cardds.forEach((card) => {
    card.classList.toggle("bg-[#272727]");
    card.classList.toggle("bg-[#F5F5F5]");
  });
  keepWrapper.classList.toggle("border-[#333333]");
  keepWrapper.classList.toggle("border-[#E5E7EA]");

  safeCars.forEach((card) => {
    card.classList.toggle("bg-[#272727]");
    card.classList.toggle("bg-[#F5F5F5]");
  });
  icons.forEach((icon) => {
    icon.classList.toggle("bg-white");
    icon.classList.toggle("bg-black");
    icon.classList.toggle("text-black");
    icon.classList.toggle("text-white");
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

// let leftprev = document.querySelector(".leftprev");
// let rightnext = document.querySelector(".rightnext");
// let swiperWripper = document.querySelector(".swiper-wrapper");
// console.log(rightnext);

// rightnext.addEventListener("click", () => {
//   swiperWripper.style.transform = "translateX(-300px)";
//   console.log(swiperWripper);
// });

let wrapperCards = document.querySelector(".wrapper-cards");

let compactBtn = document.querySelector(".compact");
let sportBtn = document.querySelector(".sport");
let vanBtn = document.querySelector(".van");

vanBtn.addEventListener("click", () => {
  let vancars = cars.filter((car) => car.type === "Vans");
  renderCar(vancars);
  compactBtn.classList.remove("active");
  sportBtn.classList.remove("active");
  vanBtn.classList.add("active");
});

compactBtn.addEventListener("click", () => {
  let compactcars = cars.filter((car) => car.type === "compact");
  renderCar(compactcars);
  sportBtn.classList.remove("active");
  vanBtn.classList.remove("active");
  compactBtn.classList.add("active");
});

sportBtn.addEventListener("click", () => {
  let sportcars = cars.filter((car) => car.type === "Sports cars");
  renderCar(sportcars);
  vanBtn.classList.remove("active");
  compactBtn.classList.remove("active");
  sportBtn.classList.add("active");
});

function renderCar(arr) {
  wrapperCards.innerHTML = "";
  arr.forEach((car) => {
    const element = createCar(car);
    wrapperCards.append(element);
  });
}

function createCar(car) {
  let mode = document.body.classList.contains("text-white");
  const element = createElement(
    "div",
    `card hover:bg-[#299764]  duration-300  ${
      mode ? `text-white bg-[#272727]` : `text-black bg-[#F5F5F5]`
    } w-[387px] h-[433px]  rounded-xl hover:text-white`,
    ` <div class="info-texts gap-2 flex flex-col px-6 py-4">
    <h1 class="text-[24px] font-semibold">${car.title}</h1>
    <h4 class="text-[16px]">${car.subtitle}</h4>
  </div>
  <img src="${car.link}" alt="car" />
  <div class="grid grid-cols-2 w-full px-4 gap-y-2">
    <div class="flex items-center gap-2">
      <i class="bx bx-user"></i>
      <h1>5 Seats</h1>
    </div>
    <div class="flex items-center gap-2">
      <img src="./images/gear 1.svg" alt="aut" />
      <h1>Automatic</h1>
    </div>
    <div class="flex items-center gap-2">
      <img src="./images/File-user.svg" alt="user" />
      <h1>21+ Years</h1>
    </div>
    <div class="flex items-center gap-2">
      <i class="bx bxs-droplet"></i>
      <h1>1-lit / 2.5 km</h1>
    </div>
  </div>`
  );
  return element;
}

let all = document.querySelector(".all");

all.addEventListener("click", () => {
  renderCar(cars);
});
