const { After, Before, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
var fs = require('fs');

let stepCount = 0


Before(async function() {
  stepCount = 0
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});


AfterStep(async function(scenario) {
  stepCount += 1;

  await new Promise(r => setTimeout(r, 2000));  
  const path = require('path')
  let featurePath = scenario.pickle.uri.split(path.sep);
  var last = featurePath[featurePath.length-1];
  let featureName = last.split('.')[0];

  console.log("*********** "+featurePath);
  console.log("*********** "+featureName);
  console.log("*********** "+stepCount);
  
  if (!fs.existsSync('../../screenshots/4-44')) {
    fs.mkdirSync('../../screenshots/4-44/'+featureName, {
      recursive: true
    });
  }

  if (!fs.existsSync('../../screenshots/4-44/'+featureName )) {
    fs.mkdirSync('../../screenshots/4-44/'+featureName, {
      recursive: true
    });
  }


  await this.driver.saveScreenshot('../../screenshots/4-44/'+featureName+'/'+ stepCount + '.png');
});


