//alert("Lets make some memes!")
var meme_num = Math.floor((Math.random() * 80) + 1);
var meme = "memes/%20(" + meme_num + ").jpg";

$(".onOff").click(img_find());
//alert(meme);
function img_find() {
    "use strict";
    
    $(document).delay(3000).ready(function () {
        var count = $('body img').length;
    
        for (var i = 0; i <= count; i++){
            var img_elem = $('img').get(i);
            var meme_num = Math.floor((Math.random() * 86) + 1);
            var meme = "memes/%20(" + meme_num + ").jpg";
            $(img_elem).attr('src', chrome.extension.getURL(meme))
        }
    });

}
img_find();
