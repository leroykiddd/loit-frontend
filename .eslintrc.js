module.exports = {
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"semi": "off",
		"@typescript-eslint/semi": [
			"error"
		],
		"@typescript-eslint/no-empty-interface": [
			"error",
			{
				"allowSingleExtends": true
			}
		]
	},
	"extends": [
		"next",
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@next/next/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	]
};