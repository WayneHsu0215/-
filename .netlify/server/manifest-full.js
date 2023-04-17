export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-922f0401.js","imports":["_app/immutable/start-922f0401.js","_app/immutable/chunks/index-d5fe4acb.js","_app/immutable/chunks/singletons-3f90ecbb.js","_app/immutable/chunks/index-1269914c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/images",
				pattern: /^\/images\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/images/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
