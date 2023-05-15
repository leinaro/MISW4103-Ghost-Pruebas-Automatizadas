const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const {options} = config
let resultInfo = {}

let datetime = new Date().toISOString().replace(/:/g, ".");

async function run() {

  // Comparing kraken screenshots
  let krakenOldScreenShotsPath = config.screenshotsPath+"/"+config.versions.kraken.old;
  let krakenNewScreenShotsPath = config.screenshotsPath+"/"+config.versions.kraken.new;
  resultInfo["kraken"] = await compareVersions(krakenOldScreenShotsPath,krakenNewScreenShotsPath)

  // Comparing playwrite screenshots
  let playwriteOldScreenShotsPath = config.screenshotsPath+"/"+config.versions.playwrite.old;
  let playwriteNewScreenShotsPath = config.screenshotsPath+"/"+config.versions.playwrite.new;
  resultInfo["playwrite"] = await compareVersions(playwriteOldScreenShotsPath,playwriteNewScreenShotsPath)
  
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

  return resultInfo;
}
(async () => console.log(await run()))();

async function compareVersions(oldVersionPath, newVersionPath){
  let resultInfo = {}

  let features = fs.readdirSync(oldVersionPath).filter(function(x) {
    return x !== '.DS_Store' && x !== 'ignore-other-file.js';
  });

  for (let index = 0; index < features.length; index++) {
    const feature = features[index];

    let screenshots = fs.readdirSync(`${oldVersionPath}/${feature}`)
      .map(function (item) {
        let num = item.split('.')
        return parseInt(num, 10);
      })
      .sort(sorter);

    for (let j = 0; j < screenshots.length; j++) {
      const step = screenshots[j];

      const data = await compareImages(
        fs.readFileSync(`${oldVersionPath}/${feature}/${step}.png`),
        fs.readFileSync(`${newVersionPath}/${feature}/${step}.png`),
        options
      );

      let results = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
      }

      console.log(`${feature}-${step}`)
      console.log(results)

      resultInfo[`${feature}-${step}`] = results

      if (!fs.existsSync('./results')) {
        fs.mkdirSync('./results', {
          recursive: true
        });
      }

      if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, {
          recursive: true
        });
      }

      if (!fs.existsSync(`./results/${datetime}/${feature}`)) {
        fs.mkdirSync(`./results/${datetime}/${feature}`, {
          recursive: true
        });
      }
      fs.writeFileSync(`./results/${datetime}/${feature}/compare-${step}.png`, data.getBuffer());

      if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, {
          recursive: true
        });
      }
      fs.copyFileSync(`${oldVersionPath}/${feature}/${step}.png`, `./results/${datetime}/${feature}/old-${step}.png`);
      fs.copyFileSync(`${newVersionPath}/${feature}/${step}.png`, `./results/${datetime}/${feature}/new-${step}.png`);
    };
  };
  return resultInfo;
}

function createReport(resInfo) {
  let krakenFeatures = resInfo["kraken"]
  console.log("krakenFeatures "+krakenFeatures)
  let playwriteFeatures = resInfo["playwrite"]
  console.log("playwriteFeatures "+playwriteFeatures)

  let krakenFeaturesFiles = fs.readdirSync(config.screenshotsPath+"/"+config.versions.kraken.old).filter(function(x) {
    return x !== '.DS_Store' && x !== 'ignore-other-file.js';
  });
  let playwriteFeaturesFiles = fs.readdirSync(config.screenshotsPath+"/"+config.versions.playwrite.old).filter(function(x) {
    return x !== '.DS_Store' && x !== 'ignore-other-file.js';
  });

  return `
    <html>
      <head>
        <title> Reporte </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      </head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <div class="container-fluid">
          <h1>Reporte Semana 6</h1>
          <h2>Kraken</h2>
          <div class="accordion" id="accordionKraken">
            ${krakenFeaturesFiles.reduce((accumulator, currentValue) => accumulator + feature(currentValue, krakenFeatures, "accordionKraken", config.versions.kraken.old),"")}
          </div>
          <h2>Playwrite</h2>
          <div class="accordion" id="accordionPlaywrite">
            ${playwriteFeaturesFiles.reduce((accumulator, currentValue) => accumulator + feature(currentValue, playwriteFeatures, "accordionPlaywrite", config.versions.playwrite.old),"")}
          </div>
        </div>
      </body>
    </html>`
}

function feature(f, info, id, tool) {
  console.log("id "+id)
  console.log("f "+f)
  console.log("info "+info)

  let screenshots = fs.readdirSync(`${config.screenshotsPath+"/"+tool}/${f}`).map(function (item) {
    let num = item.split('.')
    return parseInt(num, 10);
  }).sort(sorter);

  return `
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${id}${f.replace(/\s/g, '')}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}${f.replace(/\s/g, '')}" aria-expanded="true" aria-controls="collapse${id}${f.replace(/\s/g, '')}">
        Feature: ${f}
      </button>
    </h2>
    <div id="collapse${id}${f.replace(/\s/g, '')}" class="accordion-collapse collapse" aria-labelledby="heading${id}${f.replace(/\s/g, '')}" data-bs-parent="#${id}">
      <div class="accordion-body">
        ${
          screenshots.reduce((accumulator, s) => accumulator + step(f, s, info, id), "")
        }
      </div>
    </div>
  </div>`
}

function step(f, s, info, id) {
  console.log(info)

  filterInfo = info[`${f}-${s}`]

  return `
  <div class="accordion" id="accordionStep${id}">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${s}${id}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${s}${id}" aria-expanded="true" aria-controls="collapse${s}${id}">
          Step: ${s}
        </button>
      </h2>
      <div id="collapse${s}${id}" class="accordion-collapse collapse" aria-labelledby="heading${s}${id}" data-bs-parent="#accordionStep${id}">
        <div class="accordion-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">RawMisMatchPercentage</th>
                <th scope="col">RisMatchPercentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${filterInfo.rawMisMatchPercentage}</td>
                <td>${filterInfo.misMatchPercentage}%</td>
              </tr>
            </tbody>
          </table>
          <h3>Comparativa</h3>
          <table class="table-responsive table-bordered">
            <thead>
              <tr>
                <th scope="col">Ghost Old</th>
                <th scope="col">Ghost New</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img class="img-fluid" src="./${f}/old-${s}.png" id="refImage" label="Reference">
                </td>
                <td>
                  <img class="img-fluid" src="./${f}/new-${s}.png" id="testImage" label="Test">
                </td>
                <td>
                  <img class="img-fluid" src="./${f}/compare-${s}.png" id="diffImage" label="Diff">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`
}

function sorter(a, b) {
  if (a < b) return -1;  
  if (a > b) return 1;   
  return 0; 
}