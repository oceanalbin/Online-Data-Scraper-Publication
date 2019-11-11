// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.padding = "0px 10px";
    document.getElementById("header").style.textAlign = "left";

    document.getElementById("header3").style.fontSize = "30px";
    document.getElementById("header3").style.padding = "0px 10px";
    document.getElementById("header3").style.textAlign = "right";
    document.getElementById("header3").style.marginRight = "100px";
  } else {
    document.getElementById("header").style.fontSize = "140px";
    document.getElementById("header").style.padding = "50px 10px";
    document.getElementById("header").style.textAlign = "center";


      document.getElementById("header3").style.fontSize = "60px";
      document.getElementById("header3").style.padding = "200px 10px";
      document.getElementById("header3").style.textAlign = "center";
      document.getElementById("header3").style.marginRight = "0px";
  }
}
