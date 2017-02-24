// <!--jquery starts here-->
$(document).ready(function(){

   $("#hide").click(function(){
     $("p").hide().show(600).slideUp(1000);
   });
     $("#show").click(function(){
       $("p").show(300).fadeToggle(1000).fadeToggle(500).css({color:'red'});
     });
     $("#btn1").click(function(){
       $("#btn1").html('hi! Neha').slideToggle(2000).show(500);
     });
     $("#btn2").on('click',function(){
       $("#btn2").html('show');
       $("#one").fadeToggle(500);
     });
     $("#btn3").on('click',function(){
       $("#btn3").html('show');
       $("#two").fadeToggle(500);
     });
     $("#btn4").on('click',function(){
       $("#btn4").html('show');
       $("#three").fadeToggle(500);
     });
     $("#btn5").on('click',function(){
       $("#btn5").html('show');
       $("#four").fadeToggle(500);
     });
});
// <!--end of jquery-->
