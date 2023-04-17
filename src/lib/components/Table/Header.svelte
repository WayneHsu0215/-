<script context="module">
	export const size = Symbol('row size');
</script>

<script>
	import { getContext, setContext } from 'svelte';
	import { colspan as key } from './Table.svelte';
	import { writable } from 'svelte/store';

	const colspan = getContext(key);
	const count = writable(0);

	setContext(size, count);

	count.subscribe((value) => {
		$colspan = Math.max($colspan, value);
	});

	export let className = '';
</script>

<tr class={className}>
	<slot />
</tr>
