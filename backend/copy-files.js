const ncp = require('ncp').ncp;
const path = require('path');

const sourceDir = 'src';
const targetDir = 'dist';

ncp(sourceDir, targetDir, {
  filter: (source) => {
    return !source.endsWith('.ts');
  },
}, function (err) {
  if (err) {
    return console.error(err);
  }
});