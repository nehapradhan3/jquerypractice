function animated2Dbar(barid,barcolor,barname,percentage){ 
$("#"+barid+ " .name").text(barname); 
$("#"+barid+ " .animatedslider").css('background-color',barcolor);  
$("#"+barid+ " .animatedslider").animate({height: percentage+'%'}, 1600);
$("#"+barid+ " .percentage").text(percentage); 
$("#"+barid+ " .cbox").css('background-color',barcolor); 

}