<script lang="ts">
	import { page } from '$app/stores';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === '/'}
					href="/"
				>
					Home
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === '/locations'}
					href="/locations"
				>
					Locations
				</a>
			</li>
			{#if !data}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/login'}
						href="/login"
					>
						Login
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/profile'}
						href="/profile"
					>
						Profile
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>
