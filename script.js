var i=0
var j=0
var k=0
function read(){
    if(i==0){
        document.getElementById("dots").style.display="inline"

        document.getElementById("more").style.display="none"

        document.getElementById("b1").innerHTML="Read more"

        i=1
    }

    else{
        document.getElementById("dots").style.display="none"

        document.getElementById("more").style.display="inline"

        document.getElementById("b1").innerHTML="Read less"

        i=0
    }
}

function read2(){
    if(j==0){
        document.getElementById("dots2").style.display="inline"

        document.getElementById("more2").style.display="none"

        document.getElementById("b2").innerHTML="Read more"

        j=1
    }

    else{
        document.getElementById("dots2").style.display="none"

        document.getElementById("more2").style.display="inline"

        document.getElementById("b2").innerHTML="Read less"

        j=0
    }
}

function read3(){
    if(k==0){
        document.getElementById("dots3").style.display="inline"

        document.getElementById("more3").style.display="none"

        document.getElementById("b3").innerHTML="Read more"

        k=1
    }

    else{
        document.getElementById("dots3").style.display="none"

        document.getElementById("more3").style.display="inline"

        document.getElementById("b3").innerHTML="Read less"

        k=0
    }
}

function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#stickThis').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#stickThis').removeClass('stick');
        $('#stick-here').height(0);
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});
