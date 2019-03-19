//Code for drawing.

var valueofsize = 0;

$(document).ready(function(){ 
    
$("button").click(function(){
   
    var paintScreen = document.getElementById("paintScreen").getContext("2d");
    paintScreen.clearRect(0,0,700,400);
})

 $("#color2").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;
 
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mouseup', toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
    };
    
    
    function getmousePos(canvas,evt){

        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
        if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle =  " chocolate"; 
    
        }
    }
    
 })


})


$("#color3").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;
    
    
    
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mouseup' , toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
    };
    
    
    function getmousePos(canvas,evt){
        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
        if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle =  " blue"; 
    
        }
    }
 })
 
 $("#color4").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;

    canvas.addEventListener('mousedown' , down);
    canvas.addEventListener('mouseup' , toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
    };
    
    
    function getmousePos(canvas,evt){
        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
        if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle =  " crimson"; 
    
        }
    }
 });

 $("#color5").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;
    
    
    
    canvas.addEventListener('mousedown' , down);
    canvas.addEventListener('mouseup' , toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
    };
    
    
    function getmousePos(canvas,evt){
        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
            if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle =  " cyan"; 
    
            }
    }
    
    
   
 });
 $("#color6").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;
    
    
    
    canvas.addEventListener('mousedown' , down);
    canvas.addEventListener('mouseup' , toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
    };
    
    
    function getmousePos(canvas,evt){
       // alert("22");
        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
        if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle =  " chartreuse";    
        }
    }
 })

 $("#color7").click(function(){

    var canvas =  document.getElementById("paintScreen");
    var md = false;

    canvas.addEventListener('mousedown' , down);
    canvas.addEventListener('mouseup' , toggledraw);
    canvas.addEventListener("mousemove" , 
    
    function(evt){
        console.log(evt)
        var mousePos = getmousePos(canvas, evt)
        var posx = mousePos.x;
        var posy = mousePos.y; 
        draw(canvas,posx,posy);
    });
    
    function down(){
        md = true; 
    };
    function toggledraw(){
        md = false;
};

    function getmousePos(canvas,evt){
        var rect = canvas.getBoundingClientRect();
        return {
           x:evt.clientX - rect.left,
           y:evt.clientY - rect.top
        };
    }
    function draw(canvas, posx,posy){
    var context = canvas.getContext("2d");
        if(md){
            context.fillRect(posx,posy, valueofsize, valueofsize);
            context.fillStyle = "black" 
    
        }
    }
 });

$(document).ready(function(){

brushSize();
function brushSize(){

$("#list").change(function(){
var selectedoptioption = $("#list option:selected")

    // I added the pen.
    if(selectedoptioption.val() == "penn"){
        valueofsize = 4; 
    }

    else if(selectedoptioption.val() == "small"){
    valueofsize = 12; 
   
    }else if(selectedoptioption.val()=="mid"){
    valueofsize=20;
  
    }
    else if(selectedoptioption.val()=="large"){
    valueofsize = 45;
    }
});
}
});
// End of the Script code.