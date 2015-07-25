// ==UserScript==
// @name        Census
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/census.user.js
// @description Gets a list of new citizens for a particular country in vPopulus
// @include     http://vpoptools.altervista.org/census/
// @version     1 
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var integer = 1;
var submission = 1;

//Submit function
function submitThis() {
  var submitButton = document.createElement("input");
  submitButton.type="button";
  submitButton.addEventListener("click", run1, true);
  submitButton.value="Submit";
  document.getElementById("myForm").appendChild(submitButton); 

  function run1() {
    var form = document.forms.namedItem("myForm");
    var input = form.elements.namedItem("countryID");
    submission = input.value;
    console.log(submission);
    callPages();
    countryInfo();
  }  
}

function callPage() {
  
  //Get API: Country citizens
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/country/citizens.xml?id=" + submission + "&page=" + integer + "",
    onload: function(response) {
      var responseXML = 1;
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

        //Region
        var entry4 = citizens[i].childNodes[21].childNodes[3].childNodes[3].childNodes[0].nodeValue;
        var newEntry4 = document.createElement("DIV");
        var textEntry4 = document.createTextNode(entry4);
        newEntry4.appendChild(textEntry4);
        document.getElementById("data4").appendChild(newEntry4);

        //Wellness
        var entry5 = citizens[i].childNodes[7].childNodes[0].nodeValue;
        var newEntry5 = document.createElement("DIV");
        var textEntry5 = document.createTextNode(entry5);
        newEntry5.appendChild(textEntry5);
        document.getElementById("data5").appendChild(newEntry5);

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

        //Manu
        var entry8 = citizens[i].childNodes[17].childNodes[1].childNodes[0].nodeValue;
        var newEntry8 = document.createElement("DIV");
        var textEntry8 = document.createTextNode(entry8);
        newEntry8.appendChild(textEntry8);
        document.getElementById("data8").appendChild(newEntry8); 

        //Land
        var entry9 = citizens[i].childNodes[17].childNodes[3].childNodes[0].nodeValue;
        var newEntry9 = document.createElement("DIV");
        var textEntry9 = document.createTextNode(entry9);
        newEntry9.appendChild(textEntry9);
        document.getElementById("data9").appendChild(newEntry9);  

        //Cons
        var entry10 = citizens[i].childNodes[17].childNodes[5].childNodes[0].nodeValue;
        var newEntry10 = document.createElement("DIV");
        var textEntry10 = document.createTextNode(entry10);
        newEntry10.appendChild(textEntry10);
        document.getElementById("data10").appendChild(newEntry10);  

        //Join date
        var entry11 = citizens[i].childNodes[31].childNodes[0].nodeValue;
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

function countryInfo() {
  //GET Country info
  GM_xmlhttpRequest({
    method: "GET",
    url: "http://api.vpopulus.net/v1/feeds/country.xml?id=" + submission + "",
    onload: function(response) {
      var responseXML = null;
      var R2 = response.responseXML;
      console.log(R2);

      //Get XML: Country
      var country = R2.getElementsByTagName("country");
      console.log(country);
    
      var ii = 0;
      if (country[ii]) {
        console.log(country[ii]);

        //Region
        var entry0 = country[ii].childNodes[3].childNodes[0].nodeValue;
        var textEntry0 = document.createTextNode(entry0);
        document.getElementById("data0").appendChild(textEntry0);
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

//Reset function
function resetThis() {
  var resetButton = document.createElement("input");
  resetButton.type="button";
  resetButton.addEventListener("click", run2, true);
  resetButton.value="Reset";
  document.getElementById("myForm").appendChild(resetButton); 
  
  function run2() {  
    location.reload();
  }
}

//Run
submitThis();
resetThis();
