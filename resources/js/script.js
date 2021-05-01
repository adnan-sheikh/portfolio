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

menuBtn.addEventListener('click', () => menuBtn.classList.toggle('open'));