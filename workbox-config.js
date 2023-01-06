module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,jpg,js,txt,json,woff,woff2,html,eot,svg,ttf,php}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};