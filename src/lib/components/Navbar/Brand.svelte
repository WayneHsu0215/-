<script>
	export let href = '';
</script>

<a {href} class="flex select-none {$$props.class || ''}">
	<img src="/favicon.ico" class="mr-3 h-9" alt="" />
	<span class="self-center whitespace-nowrap text-xl"><slot /></span>
</a>
