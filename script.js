let text = document.querySelector("h1");
text.onmouseover = function(){hov()};
text.onmouseout = function(){unHov()};
function hov() {
 text.innerHTML = "Test.";
}
function unHov() {
 text.innerHTML = "This site is used to host files that are used in <a href='https:\/\/positron832.neocities.org'>my Neocities website</a> and for proper XHTML testing.";
}

if (text != 420) {
 document.createElement("p");
 let text2 = document.querySelector("p");
}
else {
 text.innerHTML = "JavaScript";
}

text2.innerHTML = "text is not equal to 420.";
