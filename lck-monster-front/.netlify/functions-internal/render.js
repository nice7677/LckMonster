const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","player/geng-chovy.png","player/geng-peanut.png","player/geng-ruler.png","robots.txt","svelte-welcome.png","svelte-welcome.webp","team/geng.svg","team/ns.png","team/t1.png"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml"},
		entry: {"file":"start-12168073.js","js":["start-12168073.js","chunks/vendor-42439000.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		]
	}
});
