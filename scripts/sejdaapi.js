const axios = require('axios');
const fs = require('fs');

axios({
  method: 'post',
  url: 'https://api.sejda.com/v2/html-pdf',
  responseType: 'stream',
  headers: {
    'Authorization' : 'Token: api_C786EB5ED4384768B6E072C13B178969',
  },
  data: {
    url: 'https://arnabk.github.io/resume/',
    viewportWidth: 1600,
    // pageOrientation: 'landscape',
    // pageMargin: 30,
    // pageMarginUnits: 'px',
    // scrollPage: true,
    // pageSize: 'letter'
  }})
  .then(response => {
    response.data.pipe(fs.createWriteStream('resume.pdf'))
  })
  .catch(error => {
    console.log('Error :', error);
  });
  