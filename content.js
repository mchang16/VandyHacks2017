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
img_find();

// Retrieves from background.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "memeify"){
        sendResponse({farewell: "goodbye"});
        img_find();
    }
});

