<script lang="ts">
	let { label, value }: { label: string; value: string } = $props();
</script>

<div class="row">
	<span class="label">{label}</span>
	<span class="value">
		{#each value.split('\n') as line}
			<p>{line}</p>
		{/each}
	</span>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}

	.label {
		font-weight: 700;
		color: var(--babies-green);
		width: 100px;
		margin-right: 5px;
		flex: 1;
	}

	.value {
		font-weight: 500;
		flex: 2;
		line-break: anywhere;
	}

	p {
		margin: 0;

		&:not(:first-child) {
			margin-top: 4px;
		}
	}
</style>
