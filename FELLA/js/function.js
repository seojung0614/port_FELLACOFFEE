

function scroll(e){
    if(e >=500){
        $('.ad_people').addClass('active');
    }else{
        $('.ad_people,.ad_tit span').removeClass('active')
    };
}
function scroll02(e){
    if(e >=900){
        $('.fella_content img,.fella_logo img').addClass('active');
    }else{
        $('.fella_content img,.fella_logo img').removeClass('active');
    }

}
function navHide(){
    $('.sub_menu').slideUp(300);
    
}
function navUnder(){
    $('.mid_main_menu>li>span ,.bot_main_menu>li>span').removeClass('active')
}
function navUp(){
    $('.header_menu').slideUp(500);
}
function navColor(){
    $('.main_menu>li>span').removeClass('active');
}
function headUp(){
$('.header_nav>.main_menu>li>.ul').removeClass('active')
}
