const { TcUiClientExt } = require("@beckhoff/tc-ui-client-ext");
const fs = require("fs");
const path = require("path");

class MyExtensions extends TcUiClientExt {

    constructor() {
        super();
        console.log("Recipe Extension Backend Started");
    }

    onMessage(command, args) {

        if (command === "teachRecipe") {

            const recipeName = args.recipe || "Unknown";
            const timeStamp = new Date().toISOString();
            const logMessage = `[${timeStamp}] Recipe "${recipeName}" was taught\n`;

            console.log(logMessage);

            const filePath = path.join("C:/MyExtensions/", "recipe-log.txt");

            fs.appendFile(filePath, logMessage, (err) => {
                if (err) {
                    console.error("Error writing log:", err);
                } else {
                    console.log("Recipe log updated.");
                }
            });

            this.emit("teachResponse", {
                recipe: recipeName
            });
        }
    }
}

module.exports = MyExtensions;

