function randomColor(){
    var color = "#";
    var randomHex = "123456ABCDEF";  
    for(var i = 0; i<6;i++){
        color+= randomHex[Math.floor(Math.random()*16)]
    }
   
    return color;
}

var mytimer ;

function setColor(){
    
    $("body").css("background-color", randomColor);
}

var mytimer = setInterval(setColor, .8000);




$(document).ready(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $("#background").css("background-color", '#' + randomColor);
    });