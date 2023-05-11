const { After, Before, BeforeStep } = require('@cucumber/cucumber');
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

BeforeStep(async function(scenario) {
  //console.log(this);
  let feature = scenario.pickle.uri.split('/').pop().split('.')[0];
  let path = scenario.pickle.uri.split('/').pop().split('.')[0];
  var nameArr = path.split('\\');
  var str = nameArr[nameArr.length-1];
  console.log("***************");
  console.log(str);
  console.log("***************");
 
  
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots/'+str, {
      recursive: true
    });
  }

  if (!fs.existsSync('./screenshots/'+str )) {
    fs.mkdirSync('./screenshots/'+str, {
      recursive: true
    });
  }


  stepCount += 1;
  await this.driver.saveScreenshot('./screenshots/'  +str+'/'+ stepCount + '.png');
});


