/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {

    //using jquery to change background color of sister paragragh
    $(".haha").css("background-color", "yellow");
    $(".haha p:last").css("background-color", "gray");

    //mouse over and mouse click effect
    $('#oneButton').bind('click', alertButtonClick);
    $('#logo').bind('mouseover', mouseOverme).bind('mouseout', mouseOutme);

    //you can add, remove, and replace text
    $('#add').bind('click', addText);
    $('#remove').bind('click', removeText);
    $('#replace').bind('click', replaceText);

    //change animation and remove it
    $('#customAnimate').bind('click', customAnimate);
    $('#removeAnimation').bind('click', removeAnimation);

    //accordion
    $('#superHumans > p').hide();
    $('#superHumans h4').click(function() {
        $(this).siblings('p:visible').slideUp('2000');
        $(this).next().animate({'height': 'toggle'}, '2000', 'easeInOutExpo');
    });
    //resizable, draggable, sortable tabs
    $("#tabs").tabs();
    $("#tabs").css({'width': '1000'});
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();

    //nudging out animation
    $('#animateList').hover(function() { //mouse in
        $(this).animate({paddingLeft: '550px'}, 400);
    }, function() { //mouse out
        $(this).animate({paddingLeft: 0}, 400);
    });

    //fade in and out effect on button
    $('#navBar').bind('mouseover', fadeIn).bind('mouseout', fadeOut);
    $('#oneButton').bind('mouseover', fadeIn2).bind('mouseout', fadeOut2);
    $('#add').bind('mouseover', fadeIn3).bind('mouseout', fadeOut3);
    $('#remove').bind('mouseover', fadeIn4).bind('mouseout', fadeOut4);
    $('#replace').bind('mouseover', fadeIn5).bind('mouseout', fadeOut5);
    $('#customAnimate').bind('mouseover', fadeIn6).bind('mouseout', fadeOut6);
    $('#removeAnimation').bind('mouseover', fadeIn7).bind('mouseout', fadeOut7);

//    $("a[rel=example_group]").fancybox({
//        'transitionIn': 'elastic',
//        'transitionOut': 'elastic',
//        'titlePosition': 'over',
//        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
//            return '<span id="fancybox-title-over">Image' + (currentIndex + 1) + 
//            ' / ' + currentArray.length + (title.length ?  '&nbsp;' + title : '') + '</span>';
//        }
//});


});

function alertButtonClick() {
    alert("There was a button clicked");
}

//mouse hover effect
function mouseOverme() {
    $("#second").html("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    $("#second").css("font-size", "27px");
    $("#second").css("background-color", "red");
}

//mouse out effect
function mouseOutme() {
    $("#second").html("zzzzzzzzzzzzzzzzz");
    $("#second").css("font-size", "13px");
}

//add, remove, and replace text
function addText() {
    $("#randPara").append('<p>hahahahahahahahahahahahhahaha</p>')
}
function removeText() {
    $("#randPara p:last").remove();
}
function replaceText() {
    $("#useless").html('<h6> I am Replaced...................</h6>');
    $("#useless").css("font-size", "66px");
}

function customAnimate() {
    $("#logo").animate({opacity: 0.25, height: '150px'}, 2000, 'swing');
}

function removeAnimation() {
    $("#logo").hide('slide', {}, 2500);
}

//fade in and out by using opacity
function fadeIn() {
    $("#navBar").css("opacity", 0.4);
    $("#navBar").css("background-color", "green");
}

function fadeOut() {
    $("#navBar").css("opacity", 1);
    $("#navBar").css("background-color", "white");
}

function fadeIn2() {
    $("#oneButton").css("opacity", 0.4);
    $("#oneButton").css("background-color", "red");
}

function fadeOut2() {
    $("#oneButton").css("opacity", 1);
    $("#oneButton").css("background-color", "white");
}

function fadeIn3() {
    $("#add").css("opacity", 0.4);
    $("#add").css("background-color", "blue");
}

function fadeOut3() {
    $("#add").css("opacity", 1);
    $("#add").css("background-color", "white");
}

function fadeIn4() {
    $("#remove").css("opacity", 0.4);
    $("#remove").css("background-color", "pink");
}

function fadeOut4() {
    $("#remove").css("opacity", 1);
    $("#remove").css("background-color", "white");
}

function fadeIn5() {
    $("#replace").css("opacity", 0.4);
    $("#replace").css("background-color", "orange");
}
function fadeOut5() {
    $("#replace").css("opacity", 1);
    $("#replace").css("background-color", "white");
    
}

function fadeIn6() {
    $("#customAnimate").css("opacity", 0.4);
    $("#customAnimate").css("background-color", "purple");
}
function fadeOut6() {
    $("#customAnimate").css("opacity", 1);
    $("#customAnimate").css("background-color", "white");
}

function fadeIn7() {
    $("#removeAnimation").css("opacity", 0.4);
    $("#removeAnimation").css("background-color", "yellow");
}
function fadeOut7() {
    $("#removeAnimation").css("opacity", 1);
    $("#removeAnimation").css("background-color", "white");
}