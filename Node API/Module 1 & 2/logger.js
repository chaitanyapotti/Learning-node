//Module wrapper function
//(function (exports, require, module, __filename, __dirname) {
const EventEmitter = require("events");
let url = "";

// console.log(__filename);
// console.log(__dirname);
class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //Raise an event with event arguments
    this.emit("messageLogged", { message: message });
  }
}

module.exports = { url, Logger };
// can write module.exports.log = log;
// also module.exports = log;
// but cannot write exports = log; //cause exports is a reference to module.exports
//}
