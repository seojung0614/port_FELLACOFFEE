$(function(){
    $('.nav_top>ul>li:first-child').on('click',function(){
        $('.log').addClass('active')
    })

    $('.fell_btn_login>button').on('click',function(){
        
        let Id = $('#id')
        let Pw = $('#pw')
        console.log(Id)
        if(Id.val() == '' ){
            alert('아이디 입력하세요')
        }else if(Pw.val() ==''){
            alert('비밀번호 입력하세요')
        }
        alert('FellA에 오신걸 환영합니다.')
    })

    $('.log p').on('click',function(){
        $('.log').removeClass('active')
    })

})