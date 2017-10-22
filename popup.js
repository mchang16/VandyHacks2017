$(document).ready(function(){
    $("#makeMeme").click(function () {
        
        // Communicate with Background.js
        var port = chrome.extension.connect({
            name: "Sample Communication"
        });
            port.postMessage("memeify");
            port.onMessage.addListener(function(msg) {
        });
    });
    

    
});

