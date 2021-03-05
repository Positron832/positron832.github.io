let text = document.querySelector("h1");
text.onmouseover = function(){hov()};
text.onmouseout = function(){unHov()};
function hov() {
 text.innerHTML = "Test.";
}
