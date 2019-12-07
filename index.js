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
    document.getElementById("header3").style.marginRight = "0px";
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

let snippets = document.querySelectorAll(".snippet");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// snippet.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";
// event.target.style.zIndex = "1000";
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//       event.target.style.zIndex = "";
//   }, 500);
// }, false);

// This handler will be executed every time the cursor
// is moved over a different list item

for(var i = 0; i < snippets.length; i++) {
  snippets[i].addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "rgb(200, 0, 0)";
    event.target.style.zIndex += 100;
    // document.getElementById("header3").style.fontSize = "30px";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
      event.target.style.zIndex = "";
    }, 1500);
  }, false);
}

let snippets2 = document.querySelectorAll(".snippet2");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// snippet.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";
// event.target.style.zIndex = "1000";
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//       event.target.style.zIndex = "";
//   }, 500);
// }, false);

// This handler will be executed every time the cursor
// is moved over a different list item

for(var i = 0; i < snippets2.length; i++) {
  snippets2[i].addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "rgb(127,255,0)";
    event.target.style.zIndex += 100;
    // document.getElementById("header3").style.fontSize = "30px";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
      event.target.style.zIndex = "";
    }, 1500);
  }, false);
}

let snippets3 = document.querySelectorAll(".snippet3");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// snippet.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";
// event.target.style.zIndex = "1000";
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//       event.target.style.zIndex = "";
//   }, 500);
// }, false);

// This handler will be executed every time the cursor
// is moved over a different list item

for(var i = 0; i < snippets3.length; i++) {
  snippets3[i].addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "rgb(0,0,255)";
    event.target.style.zIndex += 100;
    // document.getElementById("header3").style.fontSize = "30px";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
      event.target.style.zIndex = "";
    }, 1500);
  }, false);
}
