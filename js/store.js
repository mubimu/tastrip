$(document).ready(function(){
    //스토어 탭메뉴
    $('.tab_wrap>li').click(function(){
        $('.tab_wrap>li').removeClass('tab_on');
        $(this).addClass('tab_on');
    });

    //관심가게 하트
    $('.fa-heart').click(function(){
        if($(this).hasClass('fa-regular')){
            $(this).addClass('fa-solid');
            $(this).removeClass('fa-regular');
        }else{
            $(this).addClass('fa-regular');
            $(this).removeClass('fa-solid');
        }
    });

    // 아코디언 메뉴
    $('.left_menu>li>p').click(function(){
        $(this).siblings('.submenu').stop().slideToggle(600);
        $(this).find('.i_arrow').toggleClass('fa-chevron-down');
        $(this).find('.i_arrow').toggleClass('fa-chevron-up');
    });
    
    document.getElementById('revi').onclick = function() {             
        window.open("about:blank").location.href="../review/review_write.html"     
    }
});