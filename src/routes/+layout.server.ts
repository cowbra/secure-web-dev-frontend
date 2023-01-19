import type { LayoutServerLoad } from "./$types;

export function load({ locals } : LayoutServerLoad) {
	return {
		user: locals.user && {
			username: locals.user.username,
			id: locals.user.id
		}
	};
}