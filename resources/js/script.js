// View button script for About section
const viewMoreBtn = document.querySelector('.view-more-js');
const viewLessBtn = document.querySelector('.view-less-js');
const moreAboutContent = document.querySelector('.full-about');

viewMoreBtn.addEventListener('click', () => {
    viewMoreBtn.style.display = 'none';
    moreAboutContent.style.display = 'block';
});

viewLessBtn.addEventListener('click', () => {
    moreAboutContent.style.display = 'none';
    viewMoreBtn.style.display = 'inline-block';
});

// Hamburger menu script

const menuBtn = document.querySelector('.menu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        menuBtn.classList.add('open');
        isMenuOpen = true;
    } else {
        isMenuOpen = false;
        menuBtn.classList.remove('open');
    }
});