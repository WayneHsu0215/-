<script>
	import { getContext, hasContext } from 'svelte';
	import { size } from './Header.svelte';

	const count = getContext(size);

	if (hasContext(size)) {
		$count++;
	}

	export let className = '';
</script>

{#if hasContext(size)}
	<th class="border border-black/20 px-3 py-3 text-base {className}"><slot /></th>
{:else}
	<td class="border border-black/20 px-3 py-2 text-lg {className}">
		<div class="w-fit" on:mousedown|stopPropagation><slot /></div>
	</td>
{/if}
