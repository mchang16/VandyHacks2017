//alert("Lets make some memes!")
var meme_num = Math.floor((Math.random() * 80) + 1);
var meme = "memes/%20(" + meme_num + ").jpg";
var button = document.querySelector('button');

button.onclick = img_find;

//alert(meme);
function img_find() {
    "use strict";
    $(document).ready(function () {
        $('img').attr('src', chrome.extension.getURL('memes/%20(1).jpg'));
    });
}
img_find();
