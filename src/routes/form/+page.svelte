<script lang="ts">
	import Button from '$lib/Button.svelte';
	import FormRow from '$lib/FormRow.svelte';
	import { formState, form as savedForm, formImg as savedFormImg } from '$lib/form.svelte';

	let imgInput: HTMLInputElement;
	let showImg = $state(false);
	let img: HTMLImageElement | null = $state(null);

	let formImg = $state('');
	const form: { [key in string]: { value: string; placeholder?: string } } = $state({});

	if (savedFormImg.loaded) {
		showImg = true;
		formImg = savedFormImg.img;
	}
	Object.entries(savedForm).forEach(([key, { value, placeholder }]) => {
		form[key] = { value, placeholder };
	});

	function onImgChange() {
		const file = imgInput?.files?.[0];

		if (file) {
			showImg = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				formImg = reader.result as string;
				if (img) img.setAttribute('src', formImg);
			});

			reader.readAsDataURL(file);
			return;
		}

		showImg = false;
	}

	function handleSubmit() {
		if (showImg) {
			savedFormImg.img = formImg;
			savedFormImg.loaded = true;
		}

		Object.entries(form).forEach(([key, { value }]) => {
			savedForm[key].value = value;
		});

		formState.submitted = true;
	}
</script>

<div class="page">
	<!-- svelte-ignore component_name_lowercase -->
	<form>
		<FormRow label="좋아하는 사진">
			<input type="file" bind:this={imgInput} onchange={onImgChange} />
			<span class="img-warn">김재중 외의 다른 사람이 나온 사진은 사용하지 말아주세요.</span>
			{#if showImg}
				<img src={formImg} style="width: 100%" alt="사진" />
			{/if}
		</FormRow>
		<FormRow label="닉네임">
			<input type="input" bind:value={form['name'].value} placeholder={form['name'].placeholder} />
		</FormRow>
		<FormRow label="트위터 아이디">
			<input type="input" bind:value={form['id'].value} placeholder={form['id'].placeholder} />
		</FormRow>
		<FormRow label="나이">
			<input type="input" bind:value={form['age'].value} placeholder={form['age'].placeholder} />
		</FormRow>
		<FormRow label="입덕 시기">
			<input
				type="input"
				bind:value={form['since'].value}
				placeholder={form['since'].placeholder}
			/>
		</FormRow>
		<FormRow label="입덕 계기">
			<textarea bind:value={form['how'].value} placeholder={form['how'].placeholder}></textarea>
		</FormRow>
		<FormRow label="최애곡/최애앨범">
			<textarea bind:value={form['favorite'].value} placeholder={form['favorite'].placeholder}
			></textarea>
		</FormRow>
		<FormRow label="재중에게 한마디">
			<textarea bind:value={form['toJJ'].value} placeholder={form['toJJ'].placeholder}></textarea>
		</FormRow>
		<FormRow label="트윗 성향">
			<textarea bind:value={form['tweet'].value} placeholder={form['tweet'].placeholder}></textarea>
		</FormRow>
		<FormRow label="이별 방법">
			<input
				type="input"
				bind:value={form['goodbye'].value}
				placeholder={form['goodbye'].placeholder}
			/>
		</FormRow>
		<FormRow label="주의사항/기타">
			<textarea bind:value={form['etc'].value} placeholder={form['etc'].placeholder}></textarea>
		</FormRow>
		<FormRow label="하고싶은 말">
			<textarea bind:value={form['comment'].value} placeholder={form['comment'].placeholder}
			></textarea>
		</FormRow>
	</form>
	<div class="submit">
		<Button
			type="submit"
			onclick={handleSubmit}
			href="/"
			text="생성하기"
			width="calc(100% - 4px)"
		/>
	</div>
</div>

<style>
	.page {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 36px 20px;
		padding-bottom: 150px;
		overflow-y: auto;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.submit {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		background-color: white;
		padding: 2px;
	}

	.img-warn {
		color: gray;
		font-size: 0.7em;
	}

	input,
	textarea {
		margin: 5px 0;
		padding: 6px;
		box-sizing: border-box;
		width: 100%;
		height: 34px;
		font-weight: 500;
		font-family: inherit;
		font-size: 0.9em;
	}

	textarea {
		height: 60px;
	}

	input[type='file'] {
		padding-left: 0;
	}

	textarea {
		resize: vertical;
	}

	input::placeholder,
	textarea::placeholder {
		color: lightgray;
	}
</style>
