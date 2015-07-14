// ==UserScript==
// @name        Region
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/region.user.js
// @description Gets a list of region residents
// @include     http://vpoptools.altervista.org/region/
// @version     1 
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var integer = 1;

function callPage() {
  
  //Get API: Region residents (72)
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/region/residents.xml?id=72&page=" + integer + "",
    onload: function(response) {
      var responseXML = null;
      var R = response.responseXML;
      console.log(R);

      //Get XML: Members
      var residents = R.getElementsByTagName("resident");
      console.log(residents);
    
      var i = 0;
      while (residents[i]) {
        if (i == null) { break; }
        console.log(residents[i]);

        //Citizen name
        var entry1 = residents[i].childNodes[3].childNodes[0].nodeValue;
        var newEntry1 = document.createElement("DIV");
        var textEntry1 = document.createTextNode(entry1);
        newEntry1.appendChild(textEntry1);
        document.getElementById("data1").appendChild(newEntry1);

        //Profile ID
        var entry2 = residents[i].childNodes[1].childNodes[0].nodeValue;
        var newEntry2 = document.createElement("DIV");
        var textEntry2 = document.createTextNode(entry2);
        newEntry2.appendChild(textEntry2);
        document.getElementById("data2").appendChild(newEntry2);

        //Country
        var entry4 = residents[i].childNodes[19].childNodes[1].childNodes[3].childNodes[0].nodeValue;
        var newEntry4 = document.createElement("DIV");
        var textEntry4 = document.createTextNode(entry4);
        newEntry4.appendChild(textEntry4);
        document.getElementById("data4").appendChild(newEntry4);

        //Wellness
        var entry5 = residents[i].childNodes[7].childNodes[0].nodeValue;
        var newEntry5 = document.createElement("DIV");
        var textEntry5 = document.createTextNode(entry5);
        newEntry5.appendChild(textEntry5);
        document.getElementById("data5").appendChild(newEntry5);

        //Rank points
        var entry7 = residents[i].childNodes[15].childNodes[3].childNodes[0].nodeValue;
        var newEntry7 = document.createElement("DIV");
        var textEntry7 = document.createTextNode(entry7);
        newEntry7.appendChild(textEntry7);
        document.getElementById("data7").appendChild(newEntry7);  

        //Manu
        var entry8 = residents[i].childNodes[17].childNodes[1].childNodes[0].nodeValue;
        var newEntry8 = document.createElement("DIV");
        var textEntry8 = document.createTextNode(entry8);
        newEntry8.appendChild(textEntry8);
        document.getElementById("data8").appendChild(newEntry8); 

        //Land
        var entry9 = residents[i].childNodes[17].childNodes[3].childNodes[0].nodeValue;
        var newEntry9 = document.createElement("DIV");
        var textEntry9 = document.createTextNode(entry9);
        newEntry9.appendChild(textEntry9);
        document.getElementById("data9").appendChild(newEntry9);  

        //Cons
        var entry10 = residents[i].childNodes[17].childNodes[5].childNodes[0].nodeValue;
        var newEntry10 = document.createElement("DIV");
        var textEntry10 = document.createTextNode(entry10);
        newEntry10.appendChild(textEntry10);
        document.getElementById("data10").appendChild(newEntry10);      
        
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
