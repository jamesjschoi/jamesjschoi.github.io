"use strict";

// Start from the Top
const startFromTop = () => {
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
};
startFromTop();

const menuClose = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>`;
const menuOpen = `<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>`;

const nav = document.querySelector('.nav-main');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const arrowFirst = document.querySelector('.arrow-first');
const arrowSecond = document.querySelector('.arrow-second');
const dropdown = document.querySelector('.dropdown-first');
const dropdown2 = document.querySelector('.dropdown-second');
const link = document.querySelector('.first-dropdown');
const link2 = document.querySelector('.second-dropdown');
const firstList = document.querySelector('.main-list-li');
const secondList = document.querySelector('.second-list-li');
const arrowSvg = document.querySelector('.first-arrow');
const arrowSvg2 = document.querySelector('.second-arrow');

// Event Listners

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('switch');
    if (hamburger.classList.contains('switch')) {
        hamburger.innerHTML = `${menuClose}`;
        hamburger.style.zIndex = '3';
        menu.style.transform = 'translateX(-250px)';

    } else {
        hamburger.innerHTML = `${menuOpen}`;
        menu.style.transform = 'translateX(250px)';
    }
    console.log(hamburger);
});

// 1)click list
// 2)target dropdown
// 3)change arrow image

firstList.addEventListener('click', e => {
    arrowFirst.classList.toggle('switch');
    const el = e.target.closest('li');
    if (!el) return;
    if (arrowFirst.classList.contains('switch')) {
        dropdown.classList.remove('hidden');
        arrowSvg.src = 'images/icon-arrow-up.svg';
    } else {
        dropdown.classList.add('hidden');
        arrowSvg.src = 'images/icon-arrow-down.svg';
    }
});

secondList.addEventListener('click', e => {
    arrowSecond.classList.toggle('switch');
    const el = e.target.closest('li');
    console.log(el);
    if (!el) return;
    if (arrowSecond.classList.contains('switch')) {
        dropdown2.classList.remove('hidden');
        arrowSvg2.src = 'images/icon-arrow-up.svg';
    } else {
        dropdown2.classList.add('hidden');
        arrowSvg2.src = 'images/icon-arrow-down.svg';
    }
});