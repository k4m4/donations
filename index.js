var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['bitcoin_address', 'paypal_me_username', 'analytics_tracking_id'], function (err, result) {
  fs.readFile( __dirname + '/assets/index.html', function (err, data) {
    if (err) {
      throw err; 
    }
    var html = data.toString();
    var html = html.replace(/{{PAYPAL}}/g, result.paypal_me_username);
    var html = html.replace(/{{BITCOIN}}/g, result.bitcoin_address);
    var html = html.replace(/{{ANALYTICS}}/g, result.analytics_tracking_id);

    fs.writeFile("index.html", html, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
});
