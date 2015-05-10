// ==UserScript==
// @name        NewCitizens
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/newcitizens.user.js
// @description Gets a list of new citizens for a particular country in vPopulus
// @include     http://vpoptools.altervista.org/
// @version     1
// @grant       GM_xmlhttpRequest
// ==/UserScript==

function findNumber() {
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/country/citizens.xml?id=2",
    onload: function(response) {
      var responseXML = null;
      var N = response.responseXML;
      number = N.getElementsByTagName("pages")[0].childNodes[0].nodeValue;
      console.log(number);
    }
  });
}

function callPage() {
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/country/citizens.xml?id=2&page=" + integer + "",
    onload: function(response) {
      var responseXML = null;
      var R = response.responseXML;
      console.log(R);

      var citizens = R.getElementsByTagName("citizen");
      console.log(citizens);
    
      var i = 0;
      while (citizens[i]) {
        if (i == null) { break; }
        console.log(citizens[i]);
        var entry1 = citizens[i].childNodes[3].childNodes[0].nodeValue;
        var newEntry = document.createElement("DIV");
        var textEntry = document.createTextNode(entry1);
        newEntry.appendChild(textEntry);
        document.getElementById("data").appendChild(newEntry);
        i++;
      }
    }
  });
}

function callPages () {
  findNumber();
  var integer = 1;
  while (integer < number) {
    callPage();
    integer++;
  }
}

callPages();
