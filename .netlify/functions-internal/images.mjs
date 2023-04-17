import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-922f0401.js","imports":["_app/immutable/start-922f0401.js","_app/immutable/chunks/index-d5fe4acb.js","_app/immutable/chunks/singletons-3f90ecbb.js","_app/immutable/chunks/index-1269914c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			{
				id: "/images",
				pattern: /^\/images\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/images/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
