// ******************Hero section Carousel************

let myHeroSections = document.querySelectorAll(
  ".hero-section-one, .hero-section-two, .hero-section-three"
);
let dotsHeroSection = document.querySelectorAll(".dot-hero-section");
var counterHeroSection = 0;

// Code for nextHero Section button

function slideNextHeroSection() {
  myHeroSections[counterHeroSection].style.animation =
    "nextQ1 0.5s ease-in forwards";
  if (counterHeroSection >= myHeroSections.length - 1) {
    counterHeroSection = 0;
  } else {
    counterHeroSection++;
  }
  myHeroSections[counterHeroSection].style.animation =
    "nextQ2 0.5s ease-in forwards";
  indicatorsHeroSection();
}

// Code for prevHeroSection button

function slidePrevHeroSection() {
  myHeroSections[counterHeroSection].style.animation =
    "prevQ1 0.5s ease-in forwards";
  if (counterHeroSection == 0) {
    counterHeroSection = myHeroSections.length - 1;
  } else {
    counterHeroSection--;
  }
  myHeroSections[counterHeroSection].style.animation =
    "prevQ2 0.5s ease-in forwards";
  indicatorsHeroSection();
}

// Auto sliding
function autoSlidingHeroSection() {
  delectIntervalHero = setInterval(timer, 10000);
  function timer() {
    slideNextHeroSection();
    indicatorsHeroSection();
  }
}
autoSlidingHeroSection();

// Stop auto sliding when mouse is over
const containerHeroSection = document.querySelector(".hero-section-container");
containerHeroSection.addEventListener("mouseover", function () {
  clearInterval(delectIntervalHero);
});

// Resume sliding when mouse is out
containerHeroSection.addEventListener("mouseout", autoSlidingHeroSection);

// Add and remove active-hero-section class from the indicatorsHeroSection
function indicatorsHeroSection() {
  for (i = 0; i < dotsHeroSection.length; i++) {
    dotsHeroSection[i].className = dotsHeroSection[i].className.replace(
      " active-hero-section",
      ""
    );
  }
  dotsHeroSection[counterHeroSection].className += " active-hero-section";
}

// Add click event to the indicator
function switchTHeroSection(currentHeroSection) {
  currentHeroSection.classList.add("active-hero-section");
  var heroSectionId = currentHeroSection.getAttribute("attr");
  if (heroSectionId > counterHeroSection) {
    myHeroSections[counterHeroSection].style.animation =
      "nextQ1 0.5s ease-in forwards";
    counterHeroSection = heroSectionId;
    myHeroSections[counterHeroSection].style.animation =
      "nextQ2 0.5s ease-in forwards";
  } else if (heroSectionId == counterHeroSection) {
    return;
  } else {
    myHeroSections[counterHeroSection].style.animation =
      "prevQ1 0.5s ease-in forwards";
    counterHeroSection = heroSectionId;
    myHeroSections[counterHeroSection].style.animation =
      "prevQ2 0.5s ease-in forwards";
  }
  indicatorsHeroSection();
}
document.querySelectorAll(".dot-hero-section").forEach(function (element) {
  element.addEventListener("click", function () {
    switchTHeroSection(this);
  });
});


// about counter


const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 20

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 50)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})



// ******************testimony************

let myCustomerTestimony = document.querySelectorAll(".my-customer-testimony");
let nextTestimony = document.querySelector(".nextTestimony");
let prevTestimony = document.querySelector(".prevTestimony");
let dotsTestimony = document.querySelectorAll(".dotTestimony");
var counterTestimony = 0;

// Code for nextTestimony button
nextTestimony.addEventListener("click", slideNextTestimony);
function slideNextTestimony() {
  myCustomerTestimony[counterTestimony].style.animation =
    "nextQ1 0.5s ease-in forwards";
  if (counterTestimony >= myCustomerTestimony.length - 1) {
    counterTestimony = 0;
  } else {
    counterTestimony++;
  }
  myCustomerTestimony[counterTestimony].style.animation =
    "nextQ2 0.5s ease-in forwards";
  indicatorsTestimony();
}

// Code for prevTestimony button
prevTestimony.addEventListener("click", slidePrevTestimony);
function slidePrevTestimony() {
  myCustomerTestimony[counterTestimony].style.animation =
    "prevQ1 0.5s ease-in forwards";
  if (counterTestimony == 0) {
    counterTestimony = myCustomerTestimony.length - 1;
  } else {
    counterTestimony--;
  }
  myCustomerTestimony[counterTestimony].style.animation =
    "prevQ2 0.5s ease-in forwards";
  indicatorsTestimony();
}

// Auto sliding
function autoSlidingTestimony() {
  deletInterval = setInterval(timer, 10000);
  function timer() {
    slideNextTestimony();
    indicatorsTestimony();
  }
}
autoSlidingTestimony();

// Stop auto sliding when mouse is over
const containerTestimony = document.querySelector(".all-testimony-container");
containerTestimony.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
containerTestimony.addEventListener("mouseout", autoSlidingTestimony);

// Add and remove activeTestimony class from the indicatorsTestimony
function indicatorsTestimony() {
  for (i = 0; i < dotsTestimony.length; i++) {
    dotsTestimony[i].className = dotsTestimony[i].className.replace(
      " activeTestimony",
      ""
    );
  }
  dotsTestimony[counterTestimony].className += " activeTestimony";
}

// Add click event to the indicator
function switchTestimony(currentTestimony) {
  currentTestimony.classList.add("activeTestimony");
  var testimonyId = currentTestimony.getAttribute("attr");
  if (testimonyId > counterTestimony) {
    myCustomerTestimony[counterTestimony].style.animation =
      "nextQ1 0.5s ease-in forwards";
    counterTestimony = testimonyId;
    myCustomerTestimony[counterTestimony].style.animation =
      "nextQ2 0.5s ease-in forwards";
  } else if (testimonyId == counterTestimony) {
    return;
  } else {
    myCustomerTestimony[counterTestimony].style.animation =
      "prevQ1 0.5s ease-in forwards";
    counterTestimony = testimonyId;
    myCustomerTestimony[counterTestimony].style.animation =
      "prevQ2 0.5s ease-in forwards";
  }
  indicatorsTestimony();
}
document.querySelectorAll(".dotTestimony").forEach(function (element) {
  element.addEventListener("click", function () {
    switchTestimony(this);
  });
});

// footer

const year=document.querySelector("#current-year");
year.innerHTML=new Date().getFullYear();