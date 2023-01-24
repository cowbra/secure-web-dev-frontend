<script lang="ts">
	import Nav from './Nav.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<Nav {data} />

<main class="mx-auto w-75">
	<slot />
</main>
