// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function page3animation() {
    let elements = document.querySelector(".element-container")
let fixed_image = document.querySelector(".fixed-image")


elements.addEventListener("mouseenter", function () {
        fixed_image.style.display = "block"
})

elements.addEventListener("mouseleave", function () {
        fixed_image.style.display = "none"
})

let element_images = document.querySelectorAll("#elem1")

element_images.forEach(function(e) {
    e.addEventListener("mouseenter" , function() {
        let images = e.getAttribute("data-image")
        fixed_image.style.backgroundImage = `url(${images})`
    })
})
}

function page4() {
    const toggles = document.querySelectorAll(".con_1");
const textPara = document.querySelector("#page4 .left p");
const box = document.querySelector(".box")

box.style.backgroundImage = `url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009-p-1600.webp)`

toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
    let image = toggle.getAttribute("data-image")
    box.style.backgroundImage = `url(${image})`
    toggles.forEach(function (t) {
        t.style.color = "#6c6c6cc3";
        t.style.marginLeft = "0";
      });
      toggle.style.color = "#fff";
      toggle.style.marginLeft = "-1vw";
      const content = toggle.getAttribute("text-content");
      textPara.textContent = content;
    });
});
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: false, 
});
}

swiperAnimation()

page3animation()
page4()

// responsive