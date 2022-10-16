$(document).ready(function(){

    $('.nav-icon').click(function(){
        $('.nav-icon').toggleClass('active');
        $('#overlay').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('noscroll');
        // $('.nav__sub-list-1').addClass('active');
    });
    
    
    $('.mobile-menu').click(function(){
        $('.nav-icon').removeClass('active');
        $('#overlay').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('noscroll');
        // $('.nav__sub-list-1').addClass('active');
    });   
    
    $('#overlay').click(function(){
        $('.nav-icon').removeClass('active');
        $('#overlay').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('noscroll');
        // $('.nav__sub-list-1').addClass('active');
    });  

   
    $('[data-link]').click(function(e){
        e.stopPropagation();
        $('.nav__sub-list-1').toggleClass('active');
    });


    //======== фиксированная шапка ===============
    var $nav = $(".nav");
    var $header = $(".header");
    var $headerContainer = $(".header__container");
    var $headerHeight = $header.height();       
    
    $(window).scroll(function() {
        let scrollDistance = $(window).scrollTop();        
        if (scrollDistance > $headerHeight) {
            $header.addClass('nav--fixed');
            $headerContainer.addClass('nav--fixed')
        } else {
            $header.removeClass('nav--fixed')
            $headerContainer.removeClass('nav--fixed')
        }
    })

    //================появление кнонки на вверх=====================
    $(window).scroll(function(){
        if($(window).scrollTop() > 700) {
            $('.scroll-top').removeClass('scroll-top--hide');           
        } else if ($(window).scrollTop() < 700) {
            $('.scroll-top').addClass('scroll-top--hide');
        }
    }); 
    
    //============================== Плавный скролл ==========================

    $('a[href*="#"]').on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 0
        }, 1500);
    });

    //=================== паралакс===================
    var paralax = document.getElementById("paralax");    
    var moveCoef = 0.5;
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", scroll);
    scroll();
    function scroll() {    
    var r = paralax.getBoundingClientRect();    
    var paralaxYCenter = r.y + r.height / 2;    
    var scrollYCenter = window.innerHeight / 2;    
    var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;
    paralax.style.backgroundPositionY = move + "px";
    }; 

    
    
    //=======================================slider4==================

    const aboutSwiper = new Swiper('.hero__swiper', {
        
        
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
        },
        
        
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });

    const reviewsSwiper = new Swiper('.reviews__swiper', {
        
        
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
        },
        
        pagination: {
            el: '.swiper-pagination',            
        },        
        
    });
    
    // ========================счетчик==================================

    $('[data-count]').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step:function(now){
                $(this).text(Math.ceil(now));
            }
        });        
    });

     //=====================табы=========================

     $('.tabs li').click(function(){
        let id = $(this).attr('data-tab');
        let content = $('[data-tab="'+ id +'"]');
        $('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content.active').removeClass('active');
        content.addClass('active');
    });
    
    //===========счетчик добовления товара ==============================    

    $('.counter__sumbol').each(function(){
        $(this).click(function(){
            let direction = $(this).attr('data-direction');
            const inp = $(this).siblings('.counter__amount');
            const curentValue = +inp.val(); 
            let newValue; 
            if(direction === 'plus'){
                newValue = curentValue + 1;                
            } else {
                newValue = curentValue > 0 ? curentValue - 1 : 0;
            }
            inp.val(newValue);            
        });
    });
    //======================== аккордеон с иконками ===============================

    $('[data-accordion]').each(function(item){
        let plus = $(this).find('[data-check]'); 
        $(this).click(function(){
            let self = $(this).next();            
            self.toggleClass('hidden');
            plus.toggleClass('show');
            if(self.hasClass('hidden')){
                let selfHeigh = $(self).prop('scrollHeight');            
                self.css({'max-height' :  selfHeigh + 'px'}) 
            } else {
                self.css({'max-height' : '0px'}) 
            };            
        });       
        
    });

    //===========================mask at phone ====================

    $(".phone").mask("+7(999)999-99-99");
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };


});


    


