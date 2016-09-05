 /*====================================== Mobile Navigation ========================================*/
 window.onload = function() {
                    var a = false;
                    
                        document.getElementById('navBtn').onclick = function(){
                            if(a == false){
                             document.getElementById('mobNav').style.height = "200px";
                             a =true;
                         }else{
                             document.getElementById('mobNav').style.height = "0px";
                             a =false;
                         }
                }
             }

/*======================================== Toggle Button ==============================================*/
$(document).ready(function(){
    $(".toggleBtn").click(function(){
        $("#panel").slideToggle("fast");
    });
});
$(document).ready(function(){
    $(".more_info").click(function(){
        $(".panel").slideToggle("fast");
    });
});


/*======================================== Scroll To Top ==============================================*/
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});