var $ = require('jquery');
var Like = require('./button.js').Like;

var theButton = $(".the-button");
var likeCount = document.getElementById("like-count");

var like = new Like();

likeCount.textContent = ("0 Likes");

theButton.on('click', function(event){
  event.preventDefault();

  like.increaseLikes();

  if(like.get('likes') !== 1) {
    likeCount.textContent = (like.get('likes') + " Likes");
  } else {
    likeCount.textContent = (like.get('likes') + " Like");
  };
});
