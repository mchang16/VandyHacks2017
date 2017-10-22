var memeOn = true;
// Retrieves from popup.js
chrome.extension.onConnect.addListener(function(port) {
<<<<<<< HEAD
     port.onMessage.addListener(function(msg) {
         // Turns memefier on and off
         if (msg == 'memeOn'){
             memeOn = true;
         }else if (msg == 'memeOff'){
             memeOn = false;
         }else{
             // Checks if meme boolean is on
             if (memeOn){
             //Communicate with contents.js
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "memeify"}, function(response) {
                });
              });
             }
         }
      });
 });

=======
    port.onMessage.addListener(function(msg) {
        
        //Communicate with contents.js
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
           chrome.tabs.sendMessage(tabs[0].id, {greeting: "memeify"}, function(response) {
           });
         });
     });
});
>>>>>>> dd46b228efadb372ddd6c89beecba2809f31d097
