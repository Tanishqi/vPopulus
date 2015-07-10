// ==UserScript==
// @name        Fights
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/fights.user.js
// @description Gets a list of fights for a given battle.
// @include     http://vpoptools.altervista.org/fights/
// @version     1 
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var integer = 1;

function callPage() {
  
  //Get API: Country citizens (USA)
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/battle/fights.xml?id=172&page=" + integer + "",
    onload: function(response) {
      var responseXML = null;
      var R = response.responseXML;
      console.log(R);

      //Get XML: Citizens
      var fights = R.getElementsByTagName("fight");
      console.log(fights);
    
      var i = 0;
      while (fights[i]) {
        if (i == null) { break; }
        console.log(fights[i]);

        //Citizen name
        var entry1 = fights[i].childNodes[3].childNodes[3].childNodes[0].nodeValue;
        var newEntry1 = document.createElement("DIV");
        var textEntry1 = document.createTextNode(entry1);
        newEntry1.appendChild(textEntry1);
        document.getElementById("data1").appendChild(newEntry1);

        //Profile ID
        var entry2 = fights[i].childNodes[3].childNodes[1].childNodes[0].nodeValue;
        var newEntry2 = document.createElement("DIV");
        var textEntry2 = document.createTextNode(entry2);
        newEntry2.appendChild(textEntry2);
        document.getElementById("data2").appendChild(newEntry2);

        //Fights
        var entry12 = fights[i].childNodes[7].childNodes[0].nodeValue;
        var newEntry12 = document.createElement("DIV");
        var textEntry12 = document.createTextNode(entry12);
        newEntry12.appendChild(textEntry12);
        document.getElementById("data12").appendChild(newEntry12); 
     
        //Time
        var entry13 = fights[i].childNodes[9].childNodes[0].nodeValue;
        var newEntry13 = document.createElement("DIV");
        var textEntry13 = document.createTextNode(entry13);
        newEntry13.appendChild(textEntry13);
        document.getElementById("data13").appendChild(newEntry13); 
       
        //Next citizen
        i++;
      }
    }
  });
}

//Next page (up to 50)
function callPages () {
  while (integer < 50) {
    callPage();
    integer++;
  }
}

//Run
callPages();
