const convertApi = require('convertapi')('4JQO37aGrRnJPC4o');

(async () => {
  const result = await convertApi.convert('pdf', {
    ConversionDelay: 0,
    AdBlock: true,
    Zoom: 1,
    FixedElements: 'absolute',
    ViewportWidth: 800,
    ViewportHeight: 1200,
    PageOrientation: 'portrait',
    PageRange: '1-20',
    PageSize: 'b0',
    MarginTop: 10,
    MarginRight: 10,
    MarginBottom: 10,
    MarginLeft: 10,
    File: 'https://arnabk.github.io/resume/',
  }, "html");
  await result.saveFiles('./');  
})();
