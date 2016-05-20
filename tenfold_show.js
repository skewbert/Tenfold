// JavaScript Document

$(document).ready(function(){
    $("#showPopupIcon").click(function(){
        $(".popup").css("display", "block");
    });
	
	$("#closeIcon").click(function(){
        $(".popup").css("display", "none");
    });
});