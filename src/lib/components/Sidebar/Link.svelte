<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	export let to = '';
	export let routeId = '';
	export let icon = null;
</script>

<a
	href={to}
	class:!bg-gray-200={$page.route.id === to || $page.route.id === routeId}
	class="flex items-center rounded-lg p-2 text-gray-900 transition-colors duration-75 hover:bg-gray-100 active:bg-gray-200"
>
	{#if icon}
		<Icon class="mr-3 h-6 w-6 text-gray-500" {icon} />
	{/if}
	<span><slot /></span>
</a>
