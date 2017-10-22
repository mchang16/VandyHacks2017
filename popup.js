var isOn = true;

$(document).ready(function(){
    $("#makeMeme").click(function () {
        
        // Communicate with Background.js
        var port = chrome.extension.connect({
            name: "Memeify "
        });
            port.postMessage("memeify");
            port.onMessage.addListener(function(msg) {
        });
    });
    
    // Click Turn on/off switch
    $("#onOff").click(function(){
        // Change button text on and off.
        // Calls background.js with specific messages
        if (!isOn){
            $(this).text('Turn Off');
            isOn = true;
            var port = chrome.extension.connect({
               name: "Meme On" 
            });
            port.postMessage("memeOn");
            port.onMessage.addListener(function(msg){
            });
        }else{
            $(this).text('Turn On');
            isOn = false;
            var port = chrome.extension.connect({
                name: "Meme Off"
            });
            port.postMessage("memeOff");
            port.onMessage.addListener(function(msg){
            });
        }
    });
});

