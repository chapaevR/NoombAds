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

const OpenPopupCategories = document.querySelector('.find__categories');
const closePopup = document.querySelector('.pop-up-close')
const PopupCategories = document.querySelector('.pop-up-categories')
const body = document.querySelector('body')
const BackgroundPopup = document.querySelector('.pop-up-background')

OpenPopupCategories.addEventListener('click', function(e) {
    e.preventDefault();
    PopupCategories.classList.add('active');
    body.classList.add('ofh');
})

closePopup.addEventListener('click', function() {
    PopupCategories.classList.remove('active');
    body.classList.remove('ofh');
})

BackgroundPopup.addEventListener('click', function() {
    PopupCategories.classList.remove('active');
    body.classList.remove('ofh');
})

// POP UP REGIONS

const OpenPopupRegions = document.querySelector('.find__regions')
const PopupRegions = document.querySelector('.pop-up-regions')

OpenPopupRegions.addEventListener('click', function(e) {
    e.preventDefault();
    PopupRegions.classList.add('active');
    body.classList.add('ofh');
    console.log('Нажалась1')
})

closePopup.addEventListener('click', function() {
    console.log('Нажалась2')
    PopupRegions.classList.remove('active');
    body.classList.remove('ofh');
})

BackgroundPopup.addEventListener('click', function() {
    PopupRegions.classList.remove('active');
    body.classList.remove('ofh');
})




