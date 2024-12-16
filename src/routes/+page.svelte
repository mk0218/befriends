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
<div class="info">
	<h3>베이비스 트친소 생성기 v0.1.2</h3>
	<!-- TODO: add link to twitter id. -->
	<p><i>Designed & programmed by</i> <a href="http://x.com/mik__n"><em>@mik__n</em></a></p>
	<p><i>Deployed on 2024-12-14</i></p>
	<p style="margin-top: 4px">본 사이트는 모바일에 최적화되어 있습니다.</p>
	<h4>주의사항</h4>
	<ul>
		<li>사진은 김재중만 나온 것으로 사용해주세요.</li>
		<li>2차 수정 및 재배포를 금지합니다.</li>
	</ul>
	<!-- <br /> -->
	<h4>사용 방법</h4>
	<ul>
		<li>
			만들기 또는 사용하기를 눌러 내용 입력, 생성하기를 눌러 트친소폼 미리보기를 할 수 있습니다.
			생성된 미리보기 이미지를 저장해서 사용해주세요.
		</li>
		<li>초기화시 입력된 내용은 모두 삭제되고, 되돌릴 수 없습니다.</li>
		<li>
			양식을 수정하지 않는 한에서 빈 트친소폼 저장 후 사용이 가능하지만, 양식 입력을 통해 사용하시는
			것을 추천합니다.
		</li>
	</ul>
	<h4>기타</h4>
	<ul>
		<li>버그 제보 및 건의사항은 트위터 DM 또는 스핀으로 부탁드립니다.</li>
	</ul>
</div>

<style>
	.page {
		width: 100vw;
		height: calc(56vw + 180px);
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

	.info {
		box-sizing: border-box;
		width: 100vw;
		min-height: calc(100% - 56vw - 180px);
		background-color: rgb(235, 244, 238);
		padding: 30px 7% 50px;
		align-self: baseline;
		font-size: 0.6em;
		color: rgb(100, 100, 100);

		ul {
			margin: 0;
			padding-left: 12px;
		}

		p,
		li {
			margin: 0;

			&:not(:first-child) {
				margin-top: 2px;
			}
		}

		h3,
		h4 {
			margin: 15px 0 5px;

			&:first-child {
				margin-top: 0;
			}
		}

		em {
			font-weight: 500;
		}

		a {
			text-decoration: none;
			color: inherit;
		}
	}
</style>
