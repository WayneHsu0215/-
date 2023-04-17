<script>
	export let open = false;
</script>

{#if open}
	<div class="fixed inset-0 flex h-full w-full items-center justify-center">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="fixed inset-0 h-full w-full bg-black opacity-30" on:click={() => (open = false)} />
		<div
			class="z-50 mx-auto mx-8 overflow-y-auto rounded-lg bg-neutral-50 shadow-xl {$$props.class}"
		>
			<slot />
		</div>
	</div>
{/if}
