<script context="module">
	export const isDraggable = Symbol('is draggable');
</script>

<script>
	import { setContext } from 'svelte';

	export let className = '';
	export let draggable = false;

	$: setContext(isDraggable, draggable);
</script>

<tbody class="relative {className}">
	<slot />
</tbody>
