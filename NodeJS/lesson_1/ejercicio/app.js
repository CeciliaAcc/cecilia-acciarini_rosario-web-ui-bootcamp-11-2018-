
const fs = require('fs');
const getArgument = require('./modules/consoleInput')

let current_date= new Date();
current_date_string = JSON.stringify(current_date);
const file='./logger.log';

var user = getArgument('--user');
var psw = getArgument('--psw');

// Check if the file exists in the current directory. and commit the changes
fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'File created' : 'File updated'}`);
    fs.appendFile('logger.log',`
    Usuario: ${user}
    Contraseña: ${psw}
    Fecha y Hora actual: ${current_date_string}`)
  }); 