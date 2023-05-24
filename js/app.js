"use strict";
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const burgerBlock = document.querySelector(".burger-block");

const enterButton = document.querySelector(".nav__enter-button");
const closeTopNav = document.querySelector(".top-nav__close-button");
const topNav = document.querySelector(".top-nav");

//? button toggle
enterButton.addEventListener("click", () => {
  topNav.style.transform = "translateY(0)";
  burgerBlock.classList.remove("burger-active");
  burger.classList.remove("burger-toggle");
  //   topNav.style.position = "fixed";
});

closeTopNav.addEventListener("click", () => {
  topNav.style.transform = "translateY(-120%)";
  // topNav.style.position = "absolute";
});

//? Responsive Web Design
burger.addEventListener("click", () => {
  burgerBlock.classList.toggle("burger-active");
  burger.classList.toggle("burger-toggle");
});
