"use strict";


function img_find() {
    $(document).ready(function () {
        var count = $('body img').length;

        for (var i = 0; i <= count; i++){
            var img_elem = $('img').get(i);
            var meme_num = Math.floor((Math.random() * 86) + 1);
            var meme = "memes/%20(" + meme_num + ").jpg";
            $(img_elem).attr('src', chrome.extension.getURL(meme))
        }
    });
}

function page_reload() {
  window.location.reload()
}

img_find();
