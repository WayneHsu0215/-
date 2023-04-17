<script>
	import { getContext, setContext } from 'svelte';
	import key from './key.js';

	const root = !getContext(key);

	setContext(key, true);
</script>

<ul class:pl-5={!root} class="space-y-2 {$$props.class}">
	<slot />
</ul>
