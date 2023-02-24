const ProgressBar = require('console-progress-bar');
const Promise = require('bluebird');

const progressBar = new ProgressBar({ maxValue: 100 });
(async () => {
    for (let index = 1; index <= 100; index++) {
        progressBar.startChars=index+' %'
        progressBar.setValue(index);
        await Promise.delay(10)
    }
}) ();