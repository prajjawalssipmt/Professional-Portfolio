// creating responsive navbar component
// -----------------------------------------

const mobile_nav = document.querySelector(".mobile-navbar-btn");

const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// creating portfolio tabbed component
// -----------------------------------------
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  p_btn.forEach((curElem) => curElem.classList.remove(".p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data-btn-num
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// swiper js code
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteracton: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper for media query

const swiperWidth = window.matchMedia("(max-width : 800px)");

const swiperchange = (swiperWidth) => {
  if (swiperWidth.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

//call listener function at run time
swiperchange(swiperWidth);

//Attach listener function on state changer
swiperWidth.addEventListener("change", swiperchange);

// scroll bottom to top button
const heroSection = document.querySelector(".section-hero");
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// animated number

const counterNum = document.querySelectorAll(".counter-number");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);

    const initialNum = parseInt(curElem.innerText);

    const incrementNumber = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber) {
      curElem.innerText = initialNum + incrementNumber;
      setTimeout(updateNumber, 20);
    }
  };

  updateNumber();
});
