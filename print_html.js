function getAndPrintHTML () {
  var https = require ('https');
  var info = ('');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Buffered data', info += data);

  });
});










