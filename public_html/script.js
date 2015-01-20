/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document") .ready(function(){
    $('.yeah').css('backgroound-color' , 'yellow');
    
    $('#superHumans').accordion({header: "h3"});
    // $('#superHumans').css('width', '400px');
       
    // $(' .2') .css({'visibility' : 'hidden' , 'position' : 'absolute'});
   
    // $('div:last p:nth-child(3)').css('backgroound-color', 'pink');
 
    // $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
         
    // $('h1').bind('click', mouseClick)
    
    // $('#replaceWText').bind('click, replaceWText);
    
    // $('#randPara').bind('click' , addAPara);
    
    // $('#removePara').bind('click' , removeAPara);
    
    $('#show').css('visibility' , 'hidden');
       
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    });

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500); 
    $('#show').hide('puff', {}, 2500);
}
function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    
    $('#replaceWText').text('Replaced!');
}