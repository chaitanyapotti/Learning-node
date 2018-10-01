const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const express = require("express");
const logger = require("./middleware/logger");
const config = require("config");
const authenticate = require("./middleware/authenticate");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");

app.set("view engine", "pug");
//optional
app.set("views", "./views");

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

//console.log(`app_password: ${process.env.app_password}`);

//OR
console.log(`app: ${app.get("env")}`);

//set passwords as export app_password=1234
//set EXPORT DEBUG=app:startup
//set EXPORT DEBUG=app:* for all namespaces

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true })); //key=value&key=value

//all static assets inside this folder
app.use(express.static("public"));

app.use(logger);
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

//Configuration
console.log("Application name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
//console.log("Mail Password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled");
}
app.use(authenticate);

const port = process.env.PORT || 3000;

//export/SET PORT = 5000

app.listen(port, () => {
  console.log(`Started listening at ${port}`);
});
