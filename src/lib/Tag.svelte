<script>
	let { tag } = $props();
</script>

<div class="tag">
	<span class="hash">#&nbsp;</span>{tag}
</div>

<style>
	.tag {
		font-size: 10pt;
		background-color: rgba(0, 0, 0, 40%);
		border-radius: 6px;
		padding: 3px 8px;
		color: white;
	}

	.tag:not(:first-child) {
		margin-left: 8px;
	}

	.hash {
		font-weight: 700;
	}
</style>
