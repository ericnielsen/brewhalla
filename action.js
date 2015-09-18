var getList = document.getElementsByTagName('ul');
getList[0].addEventListener('click', function(event) {
    var target = event.target;
    var messageText = 'Breweries located in ' + target.textContent;
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageText;
    var term = event.target.textContent;
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:1337/search/data/' + term);
    request.send();
    request.addEventListener('load', function() {
        console.log(request.responseText);
    });
},
false);

$('a').on('click', function(){
   var target = $(this).attr('rel');
   $("#"+target).show().siblings("div").hide();
});