// ==UserScript==
// @name        Fights
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/newcitizens.user.js
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
    url: "http://api.vpopulus.net/v1/feeds/country/citizens.xml?id=2&page=" + integer + "",
    onload: function(response) {
      var responseXML = null;
      var R = response.responseXML;
      console.log(R);

      //Get XML: Citizens
      var citizens = R.getElementsByTagName("citizen");
      console.log(citizens);
    
      var i = 0;
      while (citizens[i]) {
        if (i == null) { break; }
        console.log(citizens[i]);

        //Citizen name
        var entry1 = citizens[i].childNodes[3].childNodes[0].nodeValue;
        var newEntry1 = document.createElement("DIV");
        var textEntry1 = document.createTextNode(entry1);
        newEntry1.appendChild(textEntry1);
        document.getElementById("data1").appendChild(newEntry1);
/*
        //Profile link
        var entry2 = citizens[i].childNodes[1].childNodes[0].nodeValue;
        var newEntry2 = document.createElement("DIV");
        var textEntry2 = document.createTextNode(entry2);
        newEntry2.appendChild(textEntry2);
        document.getElementById("data2").appendChild(newEntry2);

        //Country
        var entry3 = citizens[i].childNodes[21].childNodes[1].childNodes[3].childNodes[0].nodeValue;
        var newEntry3 = document.createElement("DIV");
        var textEntry3 = document.createTextNode(entry3);
        newEntry3.appendChild(textEntry3);
        document.getElementById("data3").appendChild(newEntry3);

        //Strength
        var entry6 = citizens[i].childNodes[15].childNodes[1].childNodes[0].nodeValue;
        var newEntry6 = document.createElement("DIV");
        var textEntry6 = document.createTextNode(entry6);
        newEntry6.appendChild(textEntry6);
        document.getElementById("data6").appendChild(newEntry6);        

        //Rank points
        var entry7 = citizens[i].childNodes[15].childNodes[3].childNodes[0].nodeValue;
        var newEntry7 = document.createElement("DIV");
        var textEntry7 = document.createTextNode(entry7);
        newEntry7.appendChild(textEntry7);
        document.getElementById("data7").appendChild(newEntry7);  

        //Join date
        var entry11 = citizens[i].childNodes[31].childNodes[0].nodeValue;
        var newEntry11 = document.createElement("DIV");
        var textEntry11 = document.createTextNode(entry11);
        newEntry11.appendChild(textEntry11);
        document.getElementById("data11").appendChild(newEntry11); 
 
        //Fights
        var entry12 = citizens[i].childNodes[31].childNodes[0].nodeValue;
        var newEntry12 = document.createElement("DIV");
        var textEntry12 = document.createTextNode(entry12);
        newEntry12.appendChild(textEntry12);
        document.getElementById("data12").appendChild(newEntry12); 
     
        //Time
        var entry13 = citizens[i].childNodes[31].childNodes[0].nodeValue;
        var newEntry13 = document.createElement("DIV");
        var textEntry13 = document.createTextNode(entry13);
        newEntry13.appendChild(textEntry13);
        document.getElementById("data13").appendChild(newEntry13); 
*/        
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
