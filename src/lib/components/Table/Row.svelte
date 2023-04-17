<script>
	import { createEventDispatcher, getContext } from 'svelte';
	import { isDraggable as key } from './TableBody.svelte';

	const dispatch = createEventDispatcher();

	const isDraggable = getContext(key);

	function dragStart(event) {
		if (!isDraggable) return;

		const { offsetTop } = this;
		let from, current;

		current = from =
			Array.from(
				[...this.parentNode.children].filter((child) => child.classList.contains('row'))
			).indexOf(this) + 1;

		const spacer = this.cloneNode(true);
		for (const element of [spacer, ...spacer.children]) {
			element.classList.add('invisible', 'border-0');
		}

		const dragMove = (e) => {
			e.preventDefault();
			const offsetY = offsetTop + e.clientY - event.clientY;
			const min = this.parentNode.children[0].offsetHeight;
			const max = this.parentNode.offsetHeight - this.offsetHeight;
			const top = Math.min(Math.max(offsetY, min), max);
			this.style.top = `${top}px`;
			const siblings = [];
			for (const element of this.parentNode.children) {
				if (element === this) continue;
				const { offsetTop, offsetHeight } = element;
				siblings.push({ element, offsetTop, offsetHeight });
			}
			current = siblings.findIndex(({ element: e }) => e === spacer);
			if (current > 0) {
				const sibling = siblings[current - 1];
				const y = this.offsetTop - this.offsetHeight;
				if (y < sibling.offsetTop - sibling.offsetHeight / 2) {
					this.parentNode.insertBefore(spacer, sibling.element);
					return;
				}
			}
			if (current < siblings.length - 1) {
				const sibling = siblings[current + 1];
				if (this.offsetTop > sibling.offsetTop - sibling.offsetHeight / 2) {
					if (!sibling.element.nextSibling) {
						this.parentNode.appendChild(spacer);
					} else {
						this.parentNode.insertBefore(spacer, sibling.element.nextSibling);
					}
				}
			}
		};

		const dragEnd = (e) => {
			e.preventDefault();
			dispatch('drag', { from, to: current });
			this.parentNode.insertBefore(this, spacer);
			this.classList.remove('dragging');
			this.parentNode.removeChild(spacer);
			for (const cell of this.children) cell.style.width = '';
			document.removeEventListener('mousemove', dragMove);
			document.removeEventListener('mouseup', dragEnd);
		};

		for (const cell of this.children) {
			cell.style.width = `${cell.offsetWidth}px`;
		}

		this.style.top = `${offsetTop}px`;
		this.classList.add('dragging');
		this.parentNode.insertBefore(spacer, this);

		document.addEventListener('mousemove', dragMove);
		document.addEventListener('mouseup', dragEnd);
	}

	export let className = '';
</script>

<tr
	class="row transition-colors duration-100 hover:bg-black/5 active:bg-black/5 {className}"
	on:mousedown|preventDefault={dragStart}
>
	<slot />
</tr>

<style lang="postcss">
	.dragging {
		@apply absolute bg-neutral-100 shadow shadow-black/25;
	}
</style>
