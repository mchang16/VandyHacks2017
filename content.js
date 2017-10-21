//alert("Lets make some memes!")
var meme_num = Math.floor((Math.random() * 80) + 1);
var meme = "memes/%20(" + meme_num + ").jpg";


//alert(meme);
function img_find() {
    "use strict";
    $(document).ready(function () {
        $('img').attr('src', chrome.extension.getURL('meme'));
    });
}
img_find();
