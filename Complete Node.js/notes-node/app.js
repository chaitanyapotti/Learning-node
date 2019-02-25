// console.log("starting app");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");

const notes = require("./notes");

const command = process.argv[2];
console.log("Command: ", command);

if (command === "add") {
  console.log("Adding new note");
} else if (command === "list") {
  console.log("Listing all notes");
} else {
  console.log("Command not recognized");
}
