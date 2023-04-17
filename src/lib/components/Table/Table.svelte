<script context="module">
	export const colspan = Symbol('table columns count');
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	setContext(colspan, writable(0));

	export let className = '';
</script>

<table class="border border-black/20 bg-white text-left {className}">
	<slot />
</table>
