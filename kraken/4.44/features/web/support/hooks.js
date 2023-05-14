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

/*
BeforeStep(async function(scenario) {
  await new Promise(r => setTimeout(r, 2000));  
  let featurePath = scenario.pickle.uri.split('\\');
  var last = featurePath[featurePath.length-1];
  let featureName = last.split('.')[0];
  
  if (!fs.existsSync('../../screenshots')) {
    fs.mkdirSync('../../screenshots/'+featureName, {
      recursive: true
    });
  }

  if (!fs.existsSync('../../screenshots/'+featureName )) {
    fs.mkdirSync('../../screenshots/'+featureName, {
      recursive: true
    });
  }


  stepCount += 1;
  await this.driver.saveScreenshot('../../screenshots/'  +featureName+'/'+ stepCount + '.png');
});
*/

AfterStep(async function(scenario) {
  const path = require('path')
  let featurePath = scenario.pickle.uri.split(path.sep);
  var last = featurePath[featurePath.length-1];
  let featureName = last.split('.')[0];


  console.log("*********** "+featurePath);
  console.log("*********** "+featureName);
  
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


  stepCount += 1;
  await this.driver.saveScreenshot('../../screenshots/4-44/'  +featureName+'/'+ stepCount + '.png');
});


