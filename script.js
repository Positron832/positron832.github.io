"use strict";
let text = document.getElementById("text");
text.onmouseover = function(){hov();}
text.onmouseout = function(){unHov();}
function hov() {
 text.textContent = "HA HA!";
}
function unHov() {
 text.innerHTML = "This site is used to host files that are used in <a href='https:\/\/positron832.neocities.org'>my Neocities website</a> and for proper XHTML testing.";
}
