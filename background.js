// Retrieves from popup.js
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        
        //Communicate with contents.js
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
           chrome.tabs.sendMessage(tabs[0].id, {greeting: "memeify"}, function(response) {
           });
         });
     });
});