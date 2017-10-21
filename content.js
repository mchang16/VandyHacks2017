//alert("Lets make some memes!")

function img_find() {
  alert("Running img_find");
    var imgs = document.getElementsByTagName("img");
    //var imgSrcs = [];
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "cats.jpg";
    }
    //return imgSrcs;
}
