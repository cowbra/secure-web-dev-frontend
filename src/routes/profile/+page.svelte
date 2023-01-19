<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>My profile</h1>
<form method="POST" action="?/profile">
	<div class="form-outline mb-4">
		<label class="form-label" for="username">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			class="form-control form-control-lg"
			value={data.user.username}
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
	<input type="submit" value="Update" class="btn btn-warning btn-block" />
</form>
<form method="POST" action="?/disconnect">
	<input type="submit" value="Disconnect" class="btn btn-danger btn-block" />
</form>
