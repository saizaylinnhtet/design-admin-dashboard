
$('.show-sidebar-btn').click(()=>{
    $('.sidebar').animate({marginLeft:0});
});

$('.hide-sidebar-btn').click(()=>{
    $('.sidebar').animate({marginLeft:"-100%"});
});

function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },500);
}

$(function () {
    $('[data-toggle="popover"]').popover()
});

$('.fullscreen-btn').click(function(){
    let current= $(this).closest(".card");
    current.toggleClass("fullscreen-card"); 
    if(current.hasClass("fullscreen-card")){
        $(this).html(`<i class="feather-minimize d-flex justify-content-center align-items-center p-1"></i>`);
    }
    else{
        $(this).html(`<i class="feather-maximize d-flex justify-content-center align-items-center p-1"></i>`);
    }
});

let screenHeight= $(window).height();
let currentMenuHeight= $(".nav-menu .active").offset().top;

if(currentMenuHeight > screenHeight*0.8){
    $(".sidebar").animate({
        scrollTop: currentMenuHeight-100
    },1000)
};

$( window ).resize(function() {
    window.location.reload();
});