<<<<<<< HEAD
//alert("Lets make some memes!")
var meme_num = Math.floor((Math.random() * 80) + 1);
var meme = "memes/%20(" + meme_num + ").jpg";

$(".onOff").click(img_find());
//alert(meme);
=======
"use strict";

>>>>>>> d80e0eb53b4d3ed0230b04a459bd3361211b28e0
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

<<<<<<< HEAD
}
=======


>>>>>>> d80e0eb53b4d3ed0230b04a459bd3361211b28e0
img_find();
