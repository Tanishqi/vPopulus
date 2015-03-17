// ==UserScript==
// @name        New Citizens
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/newcitizens.user.js
// @description Gets a list of new citizens for a particular country in vPopulus
// @include     http://api.vpopulus.net/
// @version     1
// @grant       none
// ==/UserScript==

var url = "http://www.api.vpopulus.net/v1/feeds/country/citizens.xml?id=4";
var xmlHttp = new GM_XMLHttpRequest();
xmlHttp.open ("GET", url, true);
xmlHttp.send ();
var xmlDoc = xmlhttp.responseXML;

document.getElementById("top").innerHTML = "Hello, world!";
