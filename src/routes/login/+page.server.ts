import { fail, redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.user) return locals.user;
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies, request, locals }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');
		if (!username && !password) return fail(400, { missingFields: true });
		if (!username) return fail(400, { missingUsername: true });
		if (!password) return fail(400, { missingPassword: true });

		const response = await api.post('users/login', { username, password });
		if (response.ok) {
			const value = response.result.jwt;
			cookies.set('jwt', value, { path: '/' });
		}

		return { ...response };
	}
};
