<script lang="ts">
	let {
		text,
		href,
		download,
		width = '200px',
		outlined = false,
		type = 'button',
		onclick
	}: {
		text: string;
		href?: string;
		download?: string;
		width?: string;
		outlined?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: () => void;
	} = $props();

	const btnClass = outlined ? 'outlined' : '';
</script>

{#if href === undefined}
	<button {type} {onclick} style="width: {width}" class={btnClass}>
		{text}
	</button>
{:else}
	<a {href} {download} style="width: {width}">
		<button {type} {onclick} style="width: 100%" class={btnClass}>
			{text}
		</button>
	</a>
{/if}

<style>
	a,
	button {
		display: block;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	button {
		background-color: var(--babies-green);
		border: none;
		border-radius: 8px;
		height: 45px;
		color: white;
		font-size: 1em;
		font-weight: 600;
		box-shadow: 2px 2px 10px var(--shadow);
		cursor: pointer;
	}

	.outlined {
		background-color: white;
		border: 0.5px solid var(--babies-green);
		color: var(--babies-green);
	}
</style>
