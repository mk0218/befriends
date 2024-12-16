<script>
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<nav>
	<span class="title">
		<a href="/">
			<h1>Boss Babies</h1>
		</a>
	</span>
</nav>

<div class="page">
	{@render children()}
</div>

<style>
	@font-face {
		font-family: 'notosanskr';
		src: 'NotoSansKr-VariableFont_wght.ttf';
	}

	@font-face {
		font-family: 'S-CoreDream-3Light';
		src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Cafe24Lovingu';
		src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/Cafe24Lovingu.woff2')
			format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	:global(:root) {
		--babies-green: #284a39;
		--shadow: rgba(0, 0, 0, 40%);

		font-family: 'Noto Sans KR';
	}

	:global(:root),
	:global(body) {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 60px;
		background-color: white;
		color: var(--babies-green);
		box-shadow: 0 0 5px var(--shadow);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		h1 {
			font-family: 'Cafe24Lovingu';
			font-size: 24pt;
		}
	}

	a {
		margin: 0;
		text-decoration: none;
		color: inherit;
	}

	.title {
		padding-top: 12px;
		user-select: none;
	}

	.page {
		position: fixed;
		top: 60px; /* Below the nav */
		left: 0;
		width: 100vw;
		height: calc(100vh - 60px);
		overflow-y: auto;
	}
</style>
