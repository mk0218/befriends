<script>
	let { label, children } = $props();
</script>

<div class="row">
	<label>
		<span class="label">{label}</span>
		{@render children()}
	</label>
</div>

<style>
	.row:not(:first-child) {
		margin-top: 24px;
	}

	.label {
		color: var(--babies-green);
		font-weight: 600;
		font-size: 0.9em;
	}
</style>
