$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("https://api.myjson.com/bins/k6wud", function(result){
            $.each(result, function(i){
                // console.log(this.name);

       name    = "name - " + result[i].name;
       status = "status -" +result[i].status;
       ImgUrl       = "imgUrl -" + result[i].imgUrl;

       document.write(name+"<br>");
        document.write(status+"<br>");
        document.write(ImgUrl+"<br>");
            });
        });
    });

    var data = {
        "data": {
            "x": "1",
            "y": "1",
            "url": "http://url.com"
        },
        "event": "start",
        "show": 1,
        "id": 50
    }

document.getElementById("json").innerHtml=JSON.stringify(data,undefined,2);


});
