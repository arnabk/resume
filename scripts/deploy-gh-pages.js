const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const gitUsername = 'arnab.k@gmail.com';
const gitPassword = process.env.GITHUB_TOKEN;

(async () => {
  // Checkout code
  await exec(`git checkout -b gh-pages https://${gitUsername}:${gitPassword}@github.com/arnabk/resume`);
  await exec("cp -R ./build/* resume/");
  await exec('git add --all');
  await exec('git commit -m "Autocommit by Jenkins - Updating gh-pages"');
  await exec('git push');
  await exec('rm -fR resume');
})();
