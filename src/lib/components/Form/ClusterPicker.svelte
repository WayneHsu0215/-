<script>
	import ChevronDown from '@iconify-icons/mdi/chevron-down';
	import Close from '@iconify-icons/mdi/close';
	import Dropdown from '$lib/components/Dropdown';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	export let filter;
	export let hidden = true;
	export let input = true;
	export let placement = 'inset-x-0';
	export let unit;

	$: if (unit.children.data.length === 0) {
		hidden = true;
	}

	const dispatch = createEventDispatcher();

	const select = (id) => {
		filter[`${unit.children.type}Id`] = id;
		if (unit.children.type === 'cluster') hidden = true;
		dispatch('change');
	};

	const back = () => {
		switch (unit.children.type) {
			case 'department':
				filter.collegeId = null;
				dispatch('change');
				break;
			case 'cluster':
				filter.clusterId = null;
				filter.departmentId = null;
				dispatch('change');
				break;
		}
	};

	const reset = () => {
		filter.collegeId = null;
		filter.departmentId = null;
		filter.clusterId = null;
		dispatch('change');
	};
</script>

<Dropdown class={$$props.class} {placement} bind:hidden>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		role="button"
		slot="toggle"
		let:toggle
		class:ring={!hidden}
		class="flex w-64 items-center rounded-lg border bg-white"
		on:click={toggle}
	>
		{#if unit.current}
			<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1 text-left"
				>{unit.current.name}</span
			>
			<button
				type="submit"
				class="inline-block px-2 py-1 outline-0"
				on:click|stopPropagation={reset}
			>
				<Icon icon={Close} class="h-5 w-5" />
			</button>
		{:else}
			<span class="flex-1 px-2 py-1 text-left text-gray-500">請選擇學群</span>
			<span class="inline-block px-2 py-1">
				<Icon icon={ChevronDown} class="h-6 w-6 text-gray-500" />
			</span>
		{/if}
	</div>

	{#if unit.children && unit.children.data.length > 0}
		<div class="max-h-80 overflow-auto rounded-lg border bg-white shadow">
			<ul class="py-1">
				{#if unit.children.type !== 'college'}
					<li>
						<button
							type="submit"
							class="w-full px-2 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100"
							on:click={() => back()}>{unit.parent.name}</button
						>
					</li>
				{/if}
				{#each unit.children.data as { id, name }}
					<li>
						<button
							type="submit"
							class:!bg-gray-200={id === unit.current.id}
							class="w-full px-2 py-1.5 text-left hover:bg-gray-100"
							on:click={() => select(id)}>{name}</button
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if input === true}
		{#each ['college', 'department', 'cluster'] as type}
			{#if filter[type + 'Id']}
				<input name={type + '_id'} type="hidden" value={filter[type + 'Id']} />
			{/if}
		{/each}
	{/if}
</Dropdown>
