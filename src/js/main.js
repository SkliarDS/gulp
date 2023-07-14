
// Проверка поддержки webp
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
// Добавление класса _webp или _no-webp для HTML
testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
});

document.addEventListener("DOMContentLoaded", function(){


    const navIcon = document.querySelector('.nav-icon');
    const mobMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('#overlay');    
    const main = document.querySelector('.main');    
    const header = document.querySelector('.header');    
    const bodyEl = document.body;
    let header_height = header.offsetHeight;

    
    navIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

    
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        navIcon.classList.remove('active');
        overlay.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });
       
        overlay.addEventListener('click', function(){
        this.classList.remove('active');
        navIcon.classList.remove('active');
        mobMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });  

    let links = document.querySelectorAll('[data-link]');
    links.forEach(link => {
        link.addEventListener('click', (e) =>{
            e.preventDefault();
            let nextEl = link.nextElementSibling;
            nextEl.classList.toggle('active');
        });
    });

    //==========добовление активного класса в меню ========================
    let navItemActive = document.querySelectorAll('.nav__item');    
    navItemActive.forEach(function(item){
        item.addEventListener('click', function(){
            navItemActive.forEach(function(i){
                i.classList.remove('nav__item--active');  
            });
            item.classList.add('nav__item--active');
        });

    }); 

    //======== фиксированная шапка =============== 
    let lastScrollTop = 0;
    const scrollHeaderFixed = () => {
        let scrollDistance = window.scrollY;      
        if (scrollDistance > headerHeight) {
            header.classList.add('header--fixed');
            main.style.paddingTop = `${headerHeight}px`;
        } else {
            header.classList.remove('header--fixed');
            main.style.paddingTop = null;            
        }
        lastScrollTop = scrollDistance;
    }; 
    
    function header_fixed() {
        var currentScroll = window.scrollY || document.documentElement.scrollTop;       
        
        if (currentScroll > lastScrollTop){
            header.classList.remove('header--fixed');
            main.style.paddingTop = `${0}px`;
        } else {
            main.style.paddingTop = `${header_height}px`;
            header.classList.add('header--fixed');
        }
        if(currentScroll == 0){
            header.classList.remove('header--fixed');
            main.style.paddingTop = `${0}px`;
        }
        lastScrollTop = currentScroll;
    };

    window.addEventListener('scroll', () => { 
        // scrollHeaderFixed();
    });
    
    // ====================Слайдер======================
    
    const swiper = new Swiper('.aaa__swiper', {
        
        
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        clickable: true,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            //   spaceBetween: 20
            },
            380: {
              slidesPerView: 1,
            //   spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });
    
    //==============================================================slider1 на мобилке================================

    let slider1 = document.querySelector('.article__images')
    let  articleSwiper;
    if(slider1){
        function mobileSlider1(){
            if(window.innerWidth <= 768 && slider1.dataset.mobile =='false'){
                articleSwiper = new Swiper(slider1, {       
                    // loop: true,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    // If we need pagination
                    
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                        //   spaceBetween: 20
                        },
                        380: {
                          slidesPerView: 1,
                        //   spaceBetween: 20
                        },
                        // when window width is >= 480px
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        
                        
                    },
                    
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    
                });
                slider1.dataset.mobile ='true'
            };
            if(window.innerWidth > 768) {
                slider1.dataset.mobile ='false';
                if(slider1.classList.contains('swiper-container-initialized')){
                    articleSwiper.destroy();
                }
                
            }
        }
        mobileSlider1();
    
        window.addEventListener('resize', () => {
            mobileSlider1();
        });
    }
    

    
    

    
    
    //=======================================slider4==================

    const aboutSwiper = new Swiper('.about__swiper', {
        // Optional parameters
        
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });
    
    //======================================slider с превьюшками кастомный========================
    let sb = document.querySelectorAll('.slider-big'); 
    if(sb){
        sb.forEach(item => {
            let sliderBig = new Swiper (item,{
                slidesPerView: 1,
                loop: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                nested: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });      
            let swiperItems = item.querySelectorAll('.swiper-item');        
                swiperItems.forEach(el=>{
                    el.addEventListener('click', (e)=> {
                        let index = e.currentTarget.dataset.card;
                        sliderBig.slideTo(index);             
                    });
                });
        }); 
        
        
    }                     
   

    //===============================slider спревьюшками с библиотеки ===============================
    const examplesSwoperBtns = new Swiper ('.examples-slider__btns',{
        
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    })
    const examplesSwiper = new Swiper('.examples-slider__container', {
                
       
        slidesPerView: 1,
        // spaceBetween: 10,
        thumbs: {
            swiper: examplesSwoperBtns,
          },
        
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });
    
    // ====================== модальные окна =========================

    const modalButtons = document.querySelectorAll('[data-modal-button]');
    const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
    const allModals = document.querySelectorAll('[data-modal]');

    // Кнопки - Открыть Модалку
    modalButtons.forEach(function (item) {
        item.addEventListener('click', function () {
            const modalId = this.dataset.modalButton;
            const modal = document.querySelector('#' + modalId);
            modal.classList.remove('hidden');
            // bodyEl.classList.add('noscroll');

            // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
            modal.querySelector('.modal-window').addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })
    })

    // Кнопки - Закрыть Модалку
    modalClosebuttons.forEach(function (item) {
        item.addEventListener('click', function () {
            const modal = this.closest('[data-modal]');
            modal.classList.add('hidden');
            // bodyEl.classList.remove('noscroll');		
        })
    })

    // Закрытие модалок по фейду
    allModals.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.add('hidden');
            // bodyEl.classList.remove('noscroll');
        });
        
    });

    // Модалка ответ на отправку формы
    let modalAnswer = document.querySelector('.answer');
    function showMmodal(){
        modalAnswer.classList.add('show-modal');
        clouseModal.addEventListener('click', function(){
            modalAnswer.classList.remove('show-modal');
            window.location.reload();
        }); 
        setTimeout(function(){
            mmodal.classList.remove('show-modal');
            window.location.reload();
        }, 4000); 
    }; 
                
    // Если модалка не помещается по высоте добовляем скролл
    let modalWindows = document.querySelectorAll('[data-modal]');
    modalWindows.forEach(function(item){
        let heightItem = item.offsetHeight;
        if(heightItem > window.innerHeight) {
            item.style.height = '100%';
        }
    });
     
    // ================== Табы ============================================
    
        

    let tabBlock = document.querySelectorAll('[data-tabs]');

    tabBlock.forEach(element => {
        let tabsParent = element.querySelector('ul');
        let tabs = tabsParent.querySelectorAll('li');
        let tabsContent = element.querySelectorAll('[data-tabs-content]');
        
        
        tabHideContent();
        tabShowContent();

        tabs.forEach((element, i) => {              
            element.addEventListener('click', function(){
                tabHideContent();
                tabShowContent(i);
            });          
            
        });

        function tabHideContent() {
            tabs.forEach(element => {
            element.classList.remove('active');
            });

            tabsContent.forEach(element => {
            element.classList.remove('active');
            });
        }

        function tabShowContent(i = 0) {
            tabs[i].classList.add('active');
            tabsContent[i].classList.add('active');
        }
    });
    
    
    

    //======================== аккордеон с иконками ===============================
    
    const accordeon = document.querySelectorAll("[data-accordion]");
    accordeon.forEach(function (item) {
        let plus = item.querySelector('[data-check]');
        item.addEventListener('click', function() {
            let self = this.nextElementSibling;
            self.classList.toggle('js-hidden');                                
            plus.classList.toggle('show');
            if(self.classList.contains('js-hidden')){
                self.style.maxHeight = self.scrollHeight + 'px';                  
            } else {
                self.style.maxHeight = null;
            }
        });
    });

    //======================== аккордеон с иконками на мобилке ===============================
    const accordeonMob = document.querySelectorAll("[data-accordion-mob]");
    if(accordeonMob !== null && window.innerWidth < 575){
        accordeonMob.forEach(function (item) {
            let plus = item.querySelector('[data-check]');
            item.addEventListener('click', function() {
                let self = this.nextElementSibling;
                self.classList.toggle('js-hidden');                                
                plus.classList.toggle('show');
                if(self.classList.contains('js-hidden')){
                    self.style.maxHeight = self.scrollHeight + 'px';                  
                } else {
                    self.style.maxHeight = null;
                }
            });
        });
    };

        //================== скролл на верх =============================================

    //  let scrollTop = document.querySelector('.scroll-top');
    //  window.onscroll = () => {
    //      if (window.scrollY > 700) {
    //          scrollTop.classList.remove('scroll-top--hide');
    //      }
    //      else if (window.scrollY < 700) {
    //          scrollTop.classList.add('scroll-top--hide');
    //      }
    //  };
    
    //  при нажатии скролится вверх на JS
    //  scrollTop.onclick = () => {
    //      window.scrollTo(0, 0);
    //  }; 
    

    // ================отправка формы PHPMailer========================================

    const telSelector = document.querySelectorAll('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    const forms = document.querySelectorAll('.form');

    forms.forEach(function(form){
        
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Submit');
        
            const formData = new FormData(form);
        
            async function fetchData() {            
                const url = "./mailer.php";            
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.text();
                console.log(result);   
                
                if (result === 'SUCCESS') {                              
                    let answers = document.querySelectorAll('.success');  
                    answers.forEach(function(answer){
                        answer.hidden = false;
                    });                   
                    // form.style.cssText = `height: 0; opacity: 0;`;
                    form.style.display = 'none';
                    reloadWin();  
                } else {                    
                    let answersErrors = document.querySelectorAll('.error');  
                    answersErrors.forEach(function(error){
                        error.hidden = false;
                    });           
                }                
                form.reset();
            }
            fetchData();
        });
    });       
    
    
    //=======================================форма с кастомной валидацией валидация =================================

    // Если валидировать несколько форм на странице то каждой форме отдельный класс	
    // new window.JustValidate('.form', {
    //     rules: {
    //         Телефон: {
    //         required: true,
    //         function: () => {
    //         const phone = telSelector.inputmask.unmaskedvalue();
    //         return Number(phone) && phone.length === 10;
    //         }
    //         },
    //         Имя: {
    //             required: true,
    //         },		
    //     },
    //     colorWrong: '#ff0f0f',
    //     messages: {
    //         Имя: {
    //             required: 'Введите имя',
    //             minLength: 'Введите 2 и более символов',
    //             maxLength: 'Запрещено вводить более 15 символов'
    //         },		
    //         email: {
    //             email: 'Введите корректный email',
    //             required: 'Введите email'
    //         },
    //         Телефон: {
    //             required: 'Введите телефон',
    //             function: 'Здесь должно быть 10 символов без +7'
    //         }
    //     },
    //     submitHandler: function(form) {
    //         console.log(form);
    //         let formHeight = form.scrollHeight;
    //         form.style.height = `${formHeight}px`;			
    //         const formData = new FormData(form);
        
    //         async function fetchData() {			
    //             const url = "./mailer.php";			
    //             const response = await fetch(url, {
    //                 method: 'POST',
    //                 body: formData,
    //             });
    //             const result = await response.text();
    //             console.log(result);
                
    //             if (result === 'SUCCESS') {                              
    //                 let answers = document.querySelectorAll('.success');  
    //                 answers.forEach(function(answer){
    //                     answer.hidden = false;
    //                 });                   
    //                 form.style.cssText = `height: 0; opacity: 0;`;
    //             } else {
    //                 document.getElementById('error').hidden = false;            
    //             }			
    //             form.reset();
    //         }
    //         fetchData();
            
    //     }
    // });
    
    

    //================================ кнопка вкл видео ===================================
    
    const videos = document.querySelectorAll('.video-id');
    if(videos !== null){
        videos.forEach(item => {
            const video = item.querySelector('video');
            
            const videoBtn = item.querySelector('.video-btn');
            videoBtn.addEventListener('click', function(){
                video.controls = 'controls';
                if(video.paused){
                    video.play();
                    videoBtn.classList.add('video-hidden');
                } else {
                    video.pause();
                    videoBtn.classList.remove('video-hidden');
                }
                
            });
        });

        let dataVideo = document.querySelector('[data-video]');
        if(dataVideo) {
            dataVideo.addEventListener('click', (e)=>{
                e.currentTarget.style.display = 'none';          
                
            });
        }; 
    };

    //========================= темная тема =============================

    // день/ночь
    const themes = document.querySelectorAll('.theme');
    const html = document.querySelector('html');
    const themeImg = document.querySelector('.theme img');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {    
        themeImg.style.display = 'none';
    }    
    if (localStorage.getItem('theme') === 'dark') {
        console.log('ffff');
    }
    themes.forEach(theme => {
        theme.addEventListener('click', function(){
        
            if(localStorage.getItem('theme') === 'dark'){
                localStorage.removeItem('theme');
            }else {
                localStorage.setItem('theme', 'dark');
            }
            addDarkClassHtml();
        });
    });


    function addDarkClassHtml() {
        
        try {
            if(localStorage.getItem('theme') === 'dark') {
                html.classList.add('dark');            
                themeImg.src = './img/icons/sun.svg';
            }
            else {
                html.classList.remove('dark');            
                themeImg.src = './img/icons/moon.svg';
                
            }
        } catch (err){}
    }
    addDarkClassHtml();

    //============================== Плавный скролл ==========================
  
    // const anchorsNames = document.querySelectorAll('[data-name-anchor]'); 
    // anchorsNames.forEach(function(anchor){ 
    //     anchor.addEventListener('click', function(e){  
    //         e.preventDefault();           
    //         const blockId = anchor.dataset.nameAnchor;            
    //         let block = document.querySelector(`#${blockId}`);
    //         console.log("anchor.addEventListener  block", block)
    //         block.classList.add('anchor');
    //         block.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'                
    //         });                     
            
    //     });
    // });
    const anchorsNames = document.querySelectorAll('[data-name-anchor]'); 
    anchorsNames.forEach(function(anchor){ 
        anchor.addEventListener('click', function(e){  
            e.preventDefault();           
            const blockId = anchor.dataset.nameAnchor;            
            let block = document.querySelector(`#${blockId}`);
            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = block.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });                    
            
        });
    });

    // Скрытие текста 
    const text_reviews = document.querySelectorAll('.text-visible');
    if (text_reviews) {
        
        text_reviews.forEach(text => {
            let style = getComputedStyle(text);
            const lineHeight = parseInt(style.lineHeight);
            const height = parseInt(style.height);
            const btn = text.nextElementSibling;
            const lines = Math.floor(height / lineHeight);
            if (lines > 5) {
                btn.style.display = 'block';	
                text.classList.add('text-hidden');
            }
            btn.addEventListener('click', function() {
                let text_before = this.previousElementSibling;
                text_before.classList.toggle('text-hidden');
                if (text_before.classList.contains('text-hidden')) {
                    this.textContent = 'Читать отзыв';
                } else {
                    this.textContent = 'Скрыть отзыв';
                }
            });
        });
    }

});

    


