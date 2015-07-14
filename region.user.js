// ==UserScript==
// @name        Region
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/region.user.js
// @description Gets a list of army members
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
      var residentss = R.getElementsByTagName("resident");
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

        //Level
        var entry12 = residents[i].childNodes[11].childNodes[3].childNodes[0].nodeValue;
        var newEntry12 = document.createElement("DIV");
        var textEntry12 = document.createTextNode(entry12);
        newEntry12.appendChild(textEntry12);
        document.getElementById("data12").appendChild(newEntry12);

        //Exp
        var entry13= residents[i].childNodes[11].childNodes[1].childNodes[0].nodeValue;
        var newEntry13 = document.createElement("DIV");
        var textEntry13 = document.createTextNode(entry13);
        newEntry13.appendChild(textEntry13);
        document.getElementById("data13").appendChild(newEntry13);
        
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

        //Strength
        var entry6 = residents[i].childNodes[15].childNodes[1].childNodes[0].nodeValue;
        var newEntry6 = document.createElement("DIV");
        var textEntry6 = document.createTextNode(entry6);
        newEntry6.appendChild(textEntry6);
        document.getElementById("data6").appendChild(newEntry6);        

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

        //Join date
        var entry11 = residents[i].childNodes[31].childNodes[0].nodeValue;
        var newEntry11 = document.createElement("DIV");
        var textEntry11 = document.createTextNode(entry11);
        newEntry11.appendChild(textEntry11);
        document.getElementById("data11").appendChild(newEntry11); 
        
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
