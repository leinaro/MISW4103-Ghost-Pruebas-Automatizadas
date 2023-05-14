const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { v3Directory, v4Directory, options } = config;

async function run() {
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g, ".");

  let features = fs.readdirSync(v3Directory).filter(function(x) {
    return x !== '.DS_Store' && x !== 'ignore-other-file.js';
  });

  for (let index = 0; index < features.length; index++) {
    const feature = features[index];

    let screenshots = fs.readdirSync(`${v3Directory}/${feature}`)
      .map(function (item) {
        let num = item.split('.')
        return parseInt(num, 10);
      })
      .sort(sorter);

    for (let j = 0; j < screenshots.length; j++) {
      const step = screenshots[j];

      const data = await compareImages(
        fs.readFileSync(`${v3Directory}/${feature}/${step}.png`),
        fs.readFileSync(`${v4Directory}/${feature}/${step}.png`),
        options
      );

      console.log(data);

      resultInfo[`${feature}-${step}`] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
      }

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
      fs.copyFileSync(`${v3Directory}/${feature}/${step}.png`, `./results/${datetime}/${feature}/v3-${step}.png`);
      fs.copyFileSync(`${v4Directory}/${feature}/${step}.png`, `./results/${datetime}/${feature}/v4-${step}.png`);
    };
  };
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

  return resultInfo;
}
(async () => console.log(await run()))();

function step(f, s, info) {
  filterInfo = info[`${f}-${s}`]
  console.log(info)

  let diffHtml = `
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <img class="img-fluid" src="./${f}/compare-${s}.png" id="diffImage" label="Diff">
      </div>
    </div>`;
  if (filterInfo.misMatchPercentage < 5) {
    
  } else {
    
  }
  return `
  <h2>Step: ${s}</h2>
  <p><strong>RawMisMatchPercentage: </strong> ${filterInfo.rawMisMatchPercentage}</p>
  <p><strong>RisMatchPercentage: </strong> ${filterInfo.misMatchPercentage}</p>
  <p><strong></strong></p>
  <p>Data: ${JSON.stringify(filterInfo)}</p>
  <div class="row">
    <div class="col-xs-12 col-md-5 m-2">
      <span class="imgname">Ghost 3.41</span>
      <img class="img-fluid" src="./${f}/v3-${s}.png" id="refImage" label="Reference">
    </div>
    <div class="col-xs-12 col-md-5 m-2">
      <span class="imgname">Ghost 4.44</span>
      <img class="img-fluid" src="./${f}/v4-${s}.png" id="testImage" label="Test">
    </div>
  </div>
  ${diffHtml}
</div>`
}

function feature(f, info) {
  let screenshots = fs.readdirSync(`${v3Directory}/${f}`).map(function (item) {
    let num = item.split('.')
    return parseInt(num, 10);
  });
  console.log("info "+info)
  screenshots = screenshots.sort(sorter);

  return `<div class="row">
      <div class="browser col-xs-12 col-md-5">
      <h2>Feature: ${f}</h2>
      </div>
      ${screenshots.map(s => step(f, s, info))}
    </div>
    `
}

function createReport(resInfo) {
  let features = fs.readdirSync(v3Directory).filter(function(x) {
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
    <h1>Reporte Semana 6</h1>
    <div class="container-fluid m-5">
    
    ${features.map(b => feature(b, resInfo))}
    </div>
    </body>
    </html>`
}

function sorter(a, b) {
  if (a < b) return -1;  
  if (a > b) return 1;   
  return 0; 
}