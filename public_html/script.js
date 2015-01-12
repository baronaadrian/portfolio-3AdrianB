/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document") .ready(function(){
    // $(' .yeah') .css('background-color' , 'yellow');
    
    // $(' .2') .css({'visibility' : 'hidden' , 'position' : 'absolute'});
   
    // $('div:last p:nth-child(3)').css('backgroound-color', 'pink');
 
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', moouseOutMe);

    $('div').bind('mouseover', mouseOverMe());
    
    $('h1').bind('click', mouseClick)
});

function mouseOverMe(){
    $("p").html("This is easy");
}

function mouseOverMe(){
    $("h1").html("nick is cool");
}

function mouseOverMe(){
    
    $("p").html('ADRIAN');
}