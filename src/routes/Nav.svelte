<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
			</li>
            <li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/login'} href="/login">Login</a>
			</li>
            <li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/register'} href="/register">Register</a>
			</li>
            <li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/register'} href="/register">Register</a>
			</li>
		</ul>
	</div>
</nav>