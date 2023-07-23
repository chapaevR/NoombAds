// SLIDER

let offset = 0;
const VipSliderLine = document.querySelector('.vip__cards');
const CategoriesSliderLine = document.querySelector('.categories__items');

document.querySelector('.vip__slider-next').addEventListener('click', function() {
    offset = offset + 334;
    VipSliderLine.style.left = offset + 'px';
})

document.querySelector('.vip__slider-prev').addEventListener('click', function() {
    offset = offset - 334;
    VipSliderLine.style.left = offset + 'px';
})

document.querySelector('.categories__slider-next').addEventListener('click', function() {
    offset = offset + 420;
    CategoriesSliderLine.style.left = offset + 'px';
})

document.querySelector('.categories__slider-prev').addEventListener('click', function() {
    offset = offset - 420;
    CategoriesSliderLine.style.left = offset + 'px';
})

// POP UP 

const body = document.querySelector('body');
const closePopupCategories = document.querySelector('.pop-up-categories-close');
const closePopupRegions = document.querySelector('.pop-up-regions-close');
const BackgroundPopup = document.querySelector('.pop-up-background');

const OpenPopupCategories = document.querySelector('.find__categories');
const PopupCategories = document.querySelector('.pop-up-categories');

const OpenPopupRegions = document.querySelector('.find__regions');
const PopupRegions = document.querySelector('.pop-up-regions');

OpenPopupCategories.addEventListener('click', function(e) {
    e.preventDefault();
    PopupCategories.classList.add('active');
    body.classList.add('ofh');
    console.log('Открылось1')
})

closePopupCategories.addEventListener('click', function() {
    PopupCategories.classList.remove('active');
    body.classList.remove('ofh');
})

BackgroundPopup.addEventListener('click', function() {
    PopupCategories.classList.remove('active');
    body.classList.remove('ofh');
})

// POP UP REGIONS


OpenPopupRegions.addEventListener('click', function(e) {
    e.preventDefault();
    PopupRegions.classList.add('active');
    body.classList.add('ofh');
    console.log('Открылось');
})

closePopupRegions.addEventListener('click', function() {
    PopupRegions.classList.remove('active');
    body.classList.remove('ofh');
})

BackgroundPopup.addEventListener('click', function() {
    PopupRegions.classList.remove('active');
    body.classList.remove('ofh');
})




