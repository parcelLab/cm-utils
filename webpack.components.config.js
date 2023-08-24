const path = require("node:path");

module.exports = {
	entry: "./components-registry/cm-utils.js", // Entry File
	output: {
		path: path.resolve(__dirname, "dist"), //Output Directory
		filename: "bundle.js", //Output file
	},
};
