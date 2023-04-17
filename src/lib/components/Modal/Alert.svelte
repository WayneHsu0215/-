<script>
	import Modal from '$lib/components/Modal/Modal.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let title;
	export let message;
	export let open = true;

	$: open || dispatch('close');
</script>

<Modal class="max-w-2xl p-4 sm:min-w-[16em]" bind:open>
	<main class="pb-4 pr-4">
		<h1 class="text-xl font-bold">{title}</h1>
		{#if message}
			<p class="pt-2 font-bold">{message}</p>
		{/if}
	</main>
	<footer class="flex justify-end">
		<button
			class="rounded-md bg-slate-300 px-4 py-1.5 font-semibold tracking-wider
				hover:bg-slate-500 hover:text-white"
			type="button"
			on:click={() => (open = false)}>確定</button
		>
	</footer>
</Modal>
