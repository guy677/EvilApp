var exec = require('child_process').exec;

exec('curl https://5675-77-137-20-251.eu.ngrok.io',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
