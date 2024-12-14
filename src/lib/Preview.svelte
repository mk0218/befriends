<script lang="ts">
	import { formImg, formState } from './form.svelte';
	import Row from './Row.svelte';
	import Tag from './Tag.svelte';

	const { form } = $props();
</script>

<div class="background" id="preview">
	<div class="container">
		<div class="image">
			<img src={formImg.loaded ? formImg.img : 'img_default.jpg'} alt="default" />
		</div>
		<div class="tags">
			<Tag tag="베이비스_트친소" />
			<Tag tag="김재중_트친소" />
		</div>
		<div class="profile">
			<span class="name">{form['name'].value}</span>
			<span class="id">@{form['id'].value}</span>
			<br />
			<span class="profile-label">{form['age'].label}: </span>
			<span class="profile-value">{form['age'].value}</span>
			&nbsp;&nbsp;&nbsp;
			<span class="profile-label">{form['since'].label}: </span>
			<span class="profile-value">{form['since'].value}</span>
		</div>
		<div class="info">
			{#each ['how', 'favorite', 'toJJ', 'tweet', 'goodbye', 'etc', 'comment'] as key}
				<Row label={form[key].label} value={form[key].value} />
			{/each}
		</div>
		{#if !formState.submitted}
			<div class="preview-overlay">PREVIEW</div>
		{/if}
	</div>
	<div class="credit">Designed / programmed by @mik__n</div>
</div>

<style>
	.background {
		width: 1000px;
		height: 560px;
		background-color: var(--babies-green);
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.container {
		width: 920px;
		height: 500px;
		background-color: white;
		box-shadow: 2px 2px 20px var(--shadow);
		position: relative;
	}

	.image {
		background-color: darkseagreen;
		width: 380px;
		height: 100%; /* 500px */
		overflow: hidden;

		img {
			min-width: 100%;
			min-height: 100%;
			transform: translate(calc((380px - 100%) / 2), calc((500px - 100%) / 2));
		}
	}

	.tags {
		position: absolute;
		top: 0;
		margin: 10px;
		display: flex;
		flex-direction: row;
	}

	.profile {
		position: absolute;
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 80%));
		width: 380px; /* Same as width of .image */
		height: 40%;
		bottom: 0;
		box-sizing: border-box;
		padding: 30px;
		padding-top: 80px;

		& > * {
			margin-bottom: 12px;
		}
	}

	.name {
		color: white;
		font-weight: 600;
		font-size: 28pt;
	}

	.id {
		margin-left: 10px;
		font-weight: 500;
		color: lightgray;
		font-size: 18pt;
	}

	.profile-label,
	.profile-value {
		font-size: 12pt;
	}

	.profile-label {
		font-weight: 700;
		color: gray;
	}

	.profile-value {
		font-weight: 500;
		color: lightgray;
	}

	.info {
		position: absolute;
		top: 0;
		left: 380px;
		width: 540px;
		height: 100%;
		box-sizing: border-box;
		padding: 10px;
		padding-left: 40px;
		font-size: 13pt;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.preview-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14em;
		font-weight: 100;
		color: rgba(91, 255, 85, 0.2);
		transform: rotate(-18deg);
	}

	.credit {
		font-size: 0.9em;
		font-weight: 200;
		font-style: italic;
		color: rgba(255, 255, 255, 0.4);
		position: absolute;
		right: 10px;
		bottom: 5px;
	}
</style>
