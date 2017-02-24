// <!--jquery starts here-->
$(document).ready(function(){

 //  $.getJSON('https://api.myjson.com/bins/k6wud',function(jsonResults){
 //   document.write(jsonResults.name);
 // });





   $("#hide").click(function(){
     $("p").hide().show(600).slideUp(1000);
   });
     $("#show").click(function(){
       $("p").show(300).fadeToggle(1000).fadeToggle(500).css({color:'red'});
     });
     $("#btn1").click(function(){
       $("#btn1").html('hi! Neha').slideToggle(2000).show(500);
     });

     $(".panel-button").on('click',function(){

       var panelId=$(this).attr('data-panelid');

       $('#'+panelId).toggle();


     });
     $("li").on('click',function(){
       $(this).next().hide();
       if($(this).not('.special')){
         alert("not special");
       }
     });



});
// <!--end of jquery-->
