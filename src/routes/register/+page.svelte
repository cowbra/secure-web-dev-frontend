<script lang="ts">
	import { page } from '$app/stores';

	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Register</h1>
<form method="POST" action="/register">
	<div class="form-outline mb-4">
		<label class="form-label" for="username">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			class="form-control form-control-lg"
		/>
	</div>
	<div class="form-outline mb-4">
		<label class="form-label" for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			class="form-control form-control-lg"
		/>
	</div>
	<div class="form-outline mb-4">
		<label class="form-label" for="verifyPassword">Verify password</label>
		<input
			type="password"
			name="verifyPassword"
			id="verifyPassword"
			class="form-control form-control-lg"
		/>
	</div>
	<input
		type="submit"
		value="Register"
		class="btn btn-primary btn-block mt-4 mb-4"
	/>
	<p class="text-muted">
		Have already an account?
		<a
			class="nav-link"
			class:active={$page.url.pathname === '/login'}
			href="/login"
		>
			Here
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
	{#if form?.missingVerification}
		<p class="text-danger">Missing password verification</p>
	{/if}
	{#if form?.passwordMismatch}
		<p class="text-danger">Passwords mismatch !</p>
	{/if}
	{#if form?.ok} <p class="text-success">Successfully registered !</p> {/if}
	{#if form?.ok === false} <p class="text-danger">{form.result}</p> {/if}
</form>
