var index =1;

showSlideForControl(index);

 function plusslide(n){


    showSlideForControl(index = index + n);


}

function showSlideForControl(n){

    var i ;

    var slide = document.getElementsByClassName("slide");

    if(n<1){

        index = slide.length;
    }

    if(n>slide.length){

        index = 1;
    }

    for(i=0 ; i<slide.length ; i++){

        slide[i].style.display="none";

     }



     slide[index-1].style.display = "block";


}


showslides();

function showslides(){

    var i;

    var slide = document.getElementsByClassName("slide");

     for(i=0 ; i<slide.length ; i++){

        slide[i].style.display="none";

     }

     index++;
     if(index > slide.length){

        index =1;

     }

     slide[index-1].style.display = "block";

     setTimeout(showslides,2000);


}

$(document).ready(function(){

    $("#bar").click(function(){

        $(".menu").addClass("active-menu");
        $(".menu").removeClass("active-hidemenu");
        $("body").css({"overflow":"hidden"});
    });

    $("#cross").click(function(){

        $(".menu").addClass("active-hidemenu");
        $(".menu").removeClass("active-menu");
        $("body").css({"overflow":"visible"});
    });

});