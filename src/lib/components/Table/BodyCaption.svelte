<script>
	import { getContext } from 'svelte';
	import { colspan as key } from './Table.svelte';

	const colspan = getContext(key);

	export let className = '';
</script>

<tr>
	<th class="border border-black/20 px-3 py-2 text-lg {className}" colspan={$colspan}><slot /></th>
</tr>
