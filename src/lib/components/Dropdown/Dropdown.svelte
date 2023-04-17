<script>
	import { clickOutside } from '$lib/utils/click-outside';

	const toggle = () => (hidden = !hidden);
	const close = () => (hidden = true);

	export let placement = 'left-0';
	export let hidden = true;
</script>

<div class="relative {$$props.class || ''}" use:clickOutside on:clickOutside={close}>
	<slot name="toggle" {toggle} />
	<div class:hidden class="absolute inset-y-auto z-10 {placement}">
		<slot {hidden} {close} />
	</div>
</div>
