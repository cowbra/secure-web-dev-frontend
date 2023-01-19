import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (!locals.user) throw redirect(307, '/');
	return { user: locals.user };
}) satisfies PageServerLoad;

export const actions: Actions = {
	profile: async ({ cookies, request }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');
		if (!username && !password) return; // no parameters, we do nothing
		if (!username) return fail(400, { missingUsername: true });
		if (!password) return fail(400, { missingPassword: true });

		const response = await api.post('users/login', { username, password });
		console.log(response);
		if (response.ok) {
			const value = response.result.jwt;
			cookies.set('jwt', value, { path: '/' });
			throw redirect(307, '/locations');
		}

		return { ...response };
	},
	disconnect: async ({ cookies, locals }) => {
		cookies.delete('jwt');
		locals.user = null;
		throw redirect(307, '/');
	}
};
