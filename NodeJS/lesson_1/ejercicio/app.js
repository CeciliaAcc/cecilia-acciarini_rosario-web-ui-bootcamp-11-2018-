const SimpleNodeLogger = require('simple-node-logger');
const getArg = require('./modules/consoleInput')

let now= new Date();
now_string = JSON.stringify(now);
const file='./logger.log';

var user = getArg('--user');
var psw = getArg('--psw');

// Check if the file exists in the current directory. and commit the changes
SimpleNodeLogger.access(file, SimpleNodeLogger.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'has benn created' : 'has been update'}`);
    SimpleNodeLogger.appendFile('logger.log',`
    usuario: ${user}
    contraseña: ${psw}
    Fecha y hora actual: ${now_string}`)
  }); 