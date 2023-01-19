<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<h1>Login</h1>
<form method="POST" action="/login">
	<div class="form-outline">
		<label class="form-label" for="username">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			class="form-control form-control-lg"
		/>
	</div>
	<div class="form-outline">
		<label class="form-label" for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			class="form-control form-control-lg"
		/>
	</div>
	<input
		type="submit"
		value="Log in"
		class="btn btn-primary btn-block mt-4 mb-4"
	/>
	<p class="text-muted">
		Not registered?
		<a
			class="nav-link"
			class:active={$page.url.pathname === '/register'}
			href="/register"
		>
			Register
		</a>
	</p>
	{#if form?.missingFields}
		<p class="text-danger">Please fill all fields</p>
	{/if}
	{#if form?.missingUsername}
		<p class="text-danger">Missing username</p>
	{/if}
	{#if form?.missingPassword}
		<p class="text-danger">Missing password</p>
	{/if}
	{#if form?.ok} <p class="text-success">You are now logged in !</p> {/if}
	{#if form?.ok === false} <p class="text-danger">{form.result}</p> {/if}
</form>
