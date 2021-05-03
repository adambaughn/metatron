const path = require("path");
const events = require("events");
const readline = require("readline");
const cp = require("child_process");

function createFile (textInput, nameInput) {
    const fs = require("fs");
    var textAreaInput = textInput;
    var fileNameInput = nameInput;

    fs.writeFile(`./assets/${fileNameInput}.md`, textAreaInput.trim(), err => {
        if (err) {
            throw err;
        }
        document.getElementById('fileSaved') = `The file was saved as ${fileNameInput}`;
    });

}


