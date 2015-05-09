// ==UserScript==
// @name        NewCitizens
// @namespace   https://github.com/Tanishqi/vPopulus/blob/master/newcitizens.user.js
// @description Gets a list of new citizens for a particular country in vPopulus
// @include     http://vpoptools.altervista.org/
// @version     1
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// ==/UserScript==

GM_xmlhttpRequest({
  method: "GET",
  url: "https://www.vpopulus.net/api/citizen/getByID/8358",
  onload: function(response) {
    var responseXML = null;
    // Inject responseXML into existing Object (only appropriate for XML content).
    if (!response.responseXML) {
      responseXML = new DOMParser()
        .parseFromString(response.responseText, "text/xml");
    }

    GM_log([
      response.status,
      response.statusText,
      response.readyState,
      response.responseHeaders,
      response.responseText,
      response.finalUrl,
      responseXML
    ].join("\n"));
  }
});
