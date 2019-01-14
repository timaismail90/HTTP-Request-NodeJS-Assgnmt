function getAndPrintHTML (options) {
  var https = require ('https');
  var info = ('');
  /* Add your code here */
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Buffered data', info += data);

  });
});


  /* Add your code here */

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));
