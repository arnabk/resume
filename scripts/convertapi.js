const convertApi = require('convertapi')('4JQO37aGrRnJPC4o');

(async () => {
  const result = await convertApi.convert('pdf', { File: 'https://arnabk.github.io/resume/' }, "html");
  await result.saveFiles('./');  
})();
