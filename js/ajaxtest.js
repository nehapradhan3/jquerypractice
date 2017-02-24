$(document).ready(function(){
  var $friends=$('#friends');
 var $name=$('#name');
 var $age=$('#age');
 var $id=$('#id');
var friendTemplate= " "+"<button data-id='{{id}}' class='remove'>X</button>"+
"<li>"+
" <p><strong>Name:</strong> {{name}} ,<p>"+
"<p><strong>Age:</strong> {{age}}, </p> "+
"<p><strong> Id:</strong> {{id}}</p></li><br>";

 var $li=$(this).closest('li');
$friends.delegate('.remove','click',function(){
  $.ajax({
    type:'DELETE',
    url:'http://rest.learncode.academy/api/johnbob/friends/'+$(this).attr('data-id'),
    success: function(){
    $li.remove();
    }
  });
});
function addFriend(friend){
  $friends.append(Mustache.render(friendTemplate,friend));
}
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/johnbob/friends/',
    success: function(friends) {


      $.each(friends,function(i,friend){
        addFriend(friend);

      });


  },//first success
  error:function(friends){
    alert('error loading friends');
  }
});//ajax
//on click of the button...a new object friend is made
$("#add-friend").on('click',function(){
  var friend={
    name:$name.val(),
     age:$age.val(),
     id:$id.val()
  };
  console.log(friend);
  $.ajax({
    type:'POST',
    url:'http://rest.learncode.academy/api/johnbob/friends/',

    dataType: 'json',
    data:friend,
    success: function(newFriend){
    addFriend(newFriend);
},//2nd success
error: function(){
  alert('error saving friends');
}
  });//2nd ajax
});
});//document ready
