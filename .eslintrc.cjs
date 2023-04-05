module.exports = {
	root: true,
	extends: ["@parcellab"],
	parserOptions: {
		project: "./tsconfig.json",
	},
	rules: {
		"@typescript-eslint/no-inferrable-types": "off",
	},
};
