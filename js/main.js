
//메인 슬라이드
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

let slideItems = document.querySelectorAll(".slide_item");

const maxSlide = slideItems.length;

let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".slide_item");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;

  if (currSlide <= maxSlide) {

    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {

    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;

    setTimeout(() => {

      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${1}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${1}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}


let loopInterval = setInterval(() => {
  nextMove();
}, 4000);

slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 4000);
});

      // 신제품 슬라이드
      $(document).ready(function(){
        $('.new_slide').slick({
          slidesToShow: 4,
          slidesToScroll:1,
          appendArrows: $('#arrows'),
          prevArrow: $('#new_prev'),
          nextArrow: $('#new_next'),
        });
      });

      // 배너
      $(function(){
        setInterval(function(){
          $('.banner_inner .banner_slide').animate({ left : '-1250px'},1000,
          function(){
            $('.banner_inner .banner_slide').append($('.banner_slide li').eq(0));
            $('.banner_inner .banner_slide').css('left',0);
          })
        },3000);
      });

      // 베스트셀러 슬라이드
      $(document).ready(function(){
        $('.best_slide').slick({
          slidesToShow: 4,
          slidesToScroll:1,
          prevArrow: $('#best_prev'),
          nextArrow: $('#best_next'),
        });
      });

      // 오직 시드물에서 만나요
      $('.nano_category').on('click', function() {
        $('.nano_category').css('color','#000000'),
        $('.mada_category, .mask_category, .sacchara_category, .care_category').css('color','#9D9D9D'),
        $('.only_nano').show(),
        $('.only_mada, .only_mask, .only_sacchara, .only_care').hide();
      });

      $('.nano_category').trigger('click');

      $('.mada_category').on('click', function() {
          $('.mada_category').css('color','#000000'),
          $('.nano_category, .mask_category, .sacchara_category, .care_category').css('color','#9D9D9D'),
          $('.only_mada').show(),
          $('.only_nano, .only_mask, .only_sacchara, .only_care').hide();
      });

      $('.mask_category').on('click', function() {
          $('.mask_category').css('color','#000000'),
          $('.nano_category, .mada_category, .sacchara_category, .care_category').css('color','#9D9D9D'),
          $('.only_mask').show(),
          $('.only_nano, .only_mada, .only_sacchara, .only_care').hide();
      });

      $('.sacchara_category').on('click', function() {
          $('.sacchara_category').css('color','#000000'),
          $('.nano_category, .mada_category, .mask_category, .care_category').css('color','#9D9D9D'),
          $('.only_sacchara').show(),
          $('.only_nano, .only_mada, .only_mask, .only_care').hide();
      });

      $('.care_category').on('click', function() {
          $('.care_category').css('color','#000000'),
          $('.nano_category, .mada_category, .mask_category, .sacchara_category').css('color','#9D9D9D'),
          $('.only_care').show(),
          $('.only_nano, .only_mada, only_mada, .only_mask, .only_sacchara').hide();
      });

      // 지금 시드물은?
      $(document).ready(function(){
        $('.now_slide').slick({
        slidesToShow: 2,
        slidesToScroll:1,
        prevArrow: $('#now_prev'),
        nextArrow: $('#now_next'),
        });
      });

        // 모달 열기
      $('.modal_btn').click(function () {
        $('.modal').show();
      });

      // 모달 닫기
      $('.close').click(function () {
        $('.modal').hide();
      });

