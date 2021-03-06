/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				external: Object.keys(pkg.depedencies || {})
			}
		}
	}
};

export default config;
