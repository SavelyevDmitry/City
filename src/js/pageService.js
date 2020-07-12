$(document).ready(function () {
    const tabletime = document.querySelectorAll(".timetable");
    const tabletimeDoctor = document.querySelectorAll(".timetable__doctor");
    
    screen_check();
    $(window).on('resize', function(){
        screen_check();
    });
   
    function screen_check(){
        tabletime.forEach( function(item, index){
            console.log(item);
            console.log(index);
            console.log($(window).width());
            if ( $(window).width() <= 768 && index > 0 ) { 
                item.classList.add("none");
                tabletimeDoctor[index].classList.add("none");
            } else {
                item.classList.remove("none")
                tabletimeDoctor[index].classList.remove("none");
            };
        })

    }
})