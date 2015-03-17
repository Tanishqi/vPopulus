// ==UserScript==
// @name        New Citizens
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/newcitizens.user.js
// @description Gets a list of new citizens for a particular country in vPopulus
// @include     about:blank
// @version     1
// @grant       none
// ==/UserScript==

<script>
var url = "http://api.vpopulus.net/v1/feeds/country/citizens.json?id=4";
var getUrl = function(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open ("GET", url, true);
  xmlHttp.onload = function(e) {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200) {
        console.log(xmlHttp.responseText);
      } else {
        console.error(xmlHttp.statusText);
      }
    }
  };
  xmlHttp.onerror = function(e) {
    console.error(xmlHttp.statusText);
  };
  xmlHttp.send (null);
  return xmlHttp.responseText;
}

console.log(getUrl());

document.write(getURL().citizens.citizen[1].id);

</script>
