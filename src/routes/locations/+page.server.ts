import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ cookies, locals }) => {
	if (!locals.user) throw redirect(307, '/');
	const response = await api.get('locations', cookies.get('jwt'));
	const locations = response.result; // to filter

	return {
		locations
	};
}) satisfies PageServerLoad;
