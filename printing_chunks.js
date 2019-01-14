var https = require ('https');

function getAndPrintHTMLChunks () {
  var info = ('');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('data in chunks', data );
    })

  })

  /* Add your code here */

}

getAndPrintHTMLChunks()