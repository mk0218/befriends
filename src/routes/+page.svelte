<script lang="ts">
	import { toJpeg } from 'html-to-image';
	import Button from '$lib/Button.svelte';
	import { form, formState, initForm, sampleForm } from '$lib/form.svelte';
	import Preview from '$lib/Preview.svelte';

	let previewImg: string | null = $state(null);

	function render() {
		const preview = document.getElementById('preview');

		if (preview) {
			toJpeg(preview, { quality: 0.98 }).then((dataUrl) => {
				previewImg = dataUrl;
			});
		}
	}

	$effect(render);

	function handleInit() {
		initForm();
		render();
	}
</script>

<div class="page">
	<h1>
		트친소표 {#if !formState.submitted}(예시){/if}
	</h1>
	<div class="renderer">
		<Preview form={formState.submitted ? form : sampleForm} />
	</div>
	<img src={previewImg} alt="미리보기" width="100%" />
	<div class="buttons">
		{#if formState.submitted}
			<Button text="초기화" outlined onclick={handleInit} />
			<Button text="수정하기" href="form" />
		{:else}
			<Button text="만들기" href="form" />
		{/if}
	</div>
</div>

<style>
	.page {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: baseline;
		align-items: center;
		box-sizing: border-box;
		padding: 10px;
		padding-top: 30px;
	}

	h1 {
		font-size: 1.2em;
	}

	.renderer {
		height: 0;
		overflow: hidden;
	}

	.buttons {
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 10px;

		& > :global(*) {
			margin: 0 4px;
		}
	}
</style>
