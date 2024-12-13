<script>
	let { label, value } = $props();
</script>

<div class="row">
	<span class="label">{label}</span>
	<span class="value">{value}</span>
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
	}
</style>
