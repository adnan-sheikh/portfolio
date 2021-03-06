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
const menuContent = document.querySelector('.menu-content');
const links = document.querySelectorAll('.menu-content li');

const toggleOpenAndShowClass = () => {
    menuBtn.classList.toggle('open');
    menuContent.classList.toggle('show');
};

menuBtn.addEventListener('click', toggleOpenAndShowClass);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', toggleOpenAndShowClass);
}