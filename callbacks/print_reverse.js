var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
  console.log(html.reverse());

  /* Write your code here! */

}

getHTML(requestOptions, printReverse);
