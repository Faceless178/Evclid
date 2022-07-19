// swiper

const swiper = new Swiper ('.swiper', {
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    loop:true,
    
});

//tabs

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.whatwedo__step').forEach(function(e){
        e.addEventListener('click', function(e){
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e){
                e.classList.remove('tab-content--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
            })
        })
    })
})

// accardeon

const list = document.querySelectorAll ('[data-name]');
const rotate = document.querySelectorAll('.quest__svg')


list.forEach(function(item){
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden')
        this.dataset.name 
        const svg = document.querySelector('#' + this.dataset.name)
        svg.classList.toggle('rotate')
})
});


// search-bar

const searchBtn = document.querySelector('.header__search')
const btnClose = document.querySelector('[data-form]')
const searchBtnAd = document.querySelector('.header__adaptive-btn')
const btnCloseAD = document.querySelector('[data-adaptive]')
searchBtn.addEventListener('click', function(){
    this.nextElementSibling.classList.remove('hidden')
    
})

btnClose.addEventListener('click',function(){
    this.dataset.form
    const add = document.querySelector('#' + this.dataset.form)
    add.classList.add('hidden')
})


searchBtnAd.addEventListener('click', function(){
    this.nextElementSibling.classList.remove('hidden')
    
})

btnCloseAD.addEventListener('click',function(){
    this.dataset.adaptive
    const ad = document.querySelector('#' + this.dataset.adaptive)
    ad.classList.add('hidden')
})

// burger

const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')
const navItem = document.querySelectorAll('.header__link')

burger.addEventListener('click', function(){

    burger.classList.toggle('burger--active');

    nav.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

})

navItem.forEach(function(el){
    el.addEventListener('click',function(){

        burger.classList.remove('burger--active');

        nav.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})