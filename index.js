var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['full_name', 'website_url', 'paypal_me_username', 'bitcoin_address', 'analytics_tracking_id'], function (err, result) {
  fs.readFile( __dirname + '/assets/index.html', function (err, data) {
    if (err) {
      throw err; 
    }
    
    if ((result.website_url.indexOf('http://') !== -1) || (result.website_url.indexOf('https://') !== -1)) {
      website_full_url = result.website_url;
    }
    else {
      website_full_url = 'http://' + result.website_url;
    }

    var html = data.toString();
    var html = html.replace(/{{FULLNAME}}/g, result.full_name);
    var html = html.replace(/{{WEBSITE}}/g, website_full_url);
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
