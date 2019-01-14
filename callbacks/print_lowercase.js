var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowercase(html) {
  console.log(toLowerCase());

  /* Write your code here! */

}

getHTML(requestOptions, printLowercase);
