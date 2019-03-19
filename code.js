// Mehmet Karatas


// jQuery code for clicking the button 
// to show Bob Ross picture and quotes.
$(document).ready(function(){
    $(".btn").on('click', function(){
        $(".popup").fadeIn('slow');
        $(".cover").fadeIn('slow');
    });
    $(".popup").on('click',function(){
        if($(event.target).is("#close")){
            $(".popup").fadeOut('slow');
            $(".cover").fadeOut('slow');
        }
        $('.cover').on('click', function(){
            $(".popup").fadeOut('slow');
            $(".cover").fadeOut('slow');
        });
    });
});