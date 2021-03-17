let text = document.querySelector("span");
text.onmouseover = function(){hov()};
text.onmouseout = function(){unHov()};
function hov() {
 text.innerHTML = "haaa haaa";
}
function unHov() {
 text.innerHTML = "This site is used to host files that are used in <a href='https:\/\/positron832.neocities.org'>my Neocities website</a> and for proper XHTML testing.";
}
