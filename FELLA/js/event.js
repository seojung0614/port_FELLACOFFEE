$(function(){
    navUp();
     navHide();
     setInterval(function(timer){
         $('.main_banner_coffee>img').addClass('active');
         $('.banner_tit').addClass('active')
         $('.banner_txt').addClass('active')
         clearInterval(timer)
     },100)
     $('.ham_bar').on('click',function(){
         headUp();
         $('.nav_bar ,.ham_bar').toggleClass('active')                
     })
     $('.nav_clo').on('click',function(){
         $('.nav_bar , .ham_bar').removeClass('active')
         $(this).css({
             transform : 'rotate(360deg)',                    
         })
     })
     // 햄버거 버튼 네비
     $('.mid_main_menu>li ,.bot_main_menu>li').on('click',function(){
         if($(this).children('span').hasClass('active')){
             navHide();
             navUnder();
         }else{                    
             navUnder();                    
             $(this).children('span').addClass('active')
             navHide();
             $(this).children('ul').slideDown(300)                
         }
     })
     $('.sub_menu').on('click',function(){
         return false;    
     })
     $('.section_ad .container').on('mouseenter',function(){
     $('.ad_tit span').toggleClass('active')
    
 })
     $('.section_ad .container').on('mouseleave',function(){
     $('.ad_tit span').toggleClass('active')
    
 })
     // 펠어 광고
     $(window).on('scroll',function(e){
         let scrTop = $(document).scrollTop();
         console.log(scrTop)
         scroll(scrTop);
         scroll02(scrTop);
     })
     $('.main_menu>li').on('click',function(){
         if($(this).children('span').hasClass('active')){
             navUp();
             navColor();
         }
         else{
             navColor();
             $(this).children('span').addClass('active')
             navUp();
             $(this).children('ul').slideDown(500);
         }
     })
     $('.btn_navcall').on('click',function(){
         $(this).addClass('active')
         $('.nav').addClass('active')
     })
     $('.clo_navcall').on('click',function(){
         $('.btn_navcall,.nav').removeClass('active')
         
     })

 })