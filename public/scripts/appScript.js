const path = require("path");
const events = require("events");
const readline = require("readline");
const fs = require("fs");
const cp = require("child_process");

function createFile (textInput, nameInput) {
    var textAreaInput = textInput;
    var fileNameInput = nameInput;

    fs.writeFile(`./assets/${fileNameInput}.md`, textAreaInput.trim(), err => {
        if (err) {
            throw err;
        }
        document.getElementById('fileSaved') = `The file was saved as ${fileNameInput}`;
    });

}


