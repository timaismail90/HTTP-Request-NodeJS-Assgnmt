var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  console.log(html.toUppercase());

  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);

