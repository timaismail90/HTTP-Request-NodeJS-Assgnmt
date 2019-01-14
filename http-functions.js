module.exports = function getHTML (options, callback) {
    /* Your code here */
};
function getHTML (options, callback) {
  var https = require ('https');
  var info = ('');
  /* Add your code here */
  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Buffered data', info += data);

  });
});

  /* Add your code here */

}
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getHTML(requestOptions, printHTML);

