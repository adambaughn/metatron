const path = require("path");
const events = require("events");
const readline = require("readline");
const cp = require("child_process");

function createFile () {
    const fs = require("fs");
    var textAreaInput = document.getElementById('essentialTraining_textarea').value;
    var fileNameInput = document.getElementById('nameInput').value;

    fs.writeFile(`./assets/${fileNameInput}.md`, textAreaInput.trim(), err => {
        if (err) {
            throw err;
        }
        document.getElementById('fileSaved') = `The file was saved as ${fileNameInput}`;
    });

}


