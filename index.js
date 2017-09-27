var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['bitcoin_address', 'paypal_me', 'analytics'], function (err, result) {
  fs.readFile( __dirname + '/index.html', function (err, data) {
    if (err) {
      throw err; 
    }
    var html = data.toString();
    var html = html.replace(/{{PAYPAL}}/g, result.paypal_me);
    var html = html.replace(/{{BITCOIN}}/g, result.bitcoin_address);
    var html = html.replace(/{{ANALYTICS}}/g, result.analytics);

    fs.writeFile("output.html", html, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
});
