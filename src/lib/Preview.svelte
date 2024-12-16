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
			<div>
				<span class="name">{form['name'].value}</span>
				<span class="id">@{form['id'].value}</span>
			</div>
			<div>
				<span class="profile-label">{form['age'].label}: </span>
				<span class="profile-value">{form['age'].value}</span>
				&nbsp;&nbsp;&nbsp;
				<span class="profile-label">{form['since'].label}: </span>
				<span class="profile-value">{form['since'].value}</span>
			</div>
		</div>
		<div class="info">
			{#each ['how', 'favorite', 'toJJ', 'tweet', 'goodbye', 'etc', 'comment'] as key}
				<Row label={form[key].label} value={form[key].value} />
			{/each}
		</div>
		{#if !formState.submitted}
			<div class="preview-overlay">SAMPLE</div>
		{/if}
	</div>
	<div class="appinfo">
		Created with
		<span class="link"> https://befriends-v3d5.vercel.app</span>
		<span style="font-style: normal">&nbsp; | &nbsp;</span>
		Designed & programmed by @mik__n
	</div>
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
		width: 950px;
		height: 505px;
		background-color: white;
		box-shadow: 2px 2px 20px var(--shadow);
		position: relative;
		margin-bottom: 10px;
		border-bottom-right-radius: 40px;
	}

	.image {
		background-color: darkseagreen;
		width: 340px;
		height: 100%; /* 500px */

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
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
		width: 340px; /* Same as width of .image */
		height: 40%;
		bottom: 0;
		box-sizing: border-box;
		padding: 105px 10px 10px 28px;

		& > :last-child {
			margin-top: 3px;
			margin-left: 2px;
		}
	}

	.name {
		color: white;
		font-weight: 600;
		font-size: 24pt;
	}

	.id {
		margin-left: 10px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.7);
		font-size: 15pt;
	}

	.profile-label,
	.profile-value {
		font-size: 13pt;
	}

	.profile-label {
		font-weight: 700;
		color: rgba(255, 255, 255, 0.6);
	}

	.profile-value {
		font-weight: 500;
		color: lightgray;
	}

	.info {
		position: absolute;
		top: 0;
		left: 340px;
		width: 610px;
		height: 100%;
		box-sizing: border-box;
		padding: 12px 15px 6px 32px;
		display: flex;
		flex-direction: column;
		text-align: justify;
		justify-content: space-evenly;
		font-size: 13.5pt;
	}

	.preview-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 210pt;
		font-weight: 100;
		letter-spacing: -16px;
		color: rgba(91, 255, 85, 0.24);
		transform: rotate(-18deg) scaleX(116%);
	}

	.appinfo {
		font-size: 10pt;
		font-weight: 200;
		font-style: italic;
		color: rgba(255, 255, 255, 0.36);
		position: absolute;
		left: 30px;
		bottom: 8px;
	}

	.link {
		text-decoration: underline;
	}
</style>
