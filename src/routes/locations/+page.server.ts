import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { filterLocations } from '$lib/utils';

export const load = (async ({ cookies, locals }) => {
	if (!locals.user) throw redirect(307, '/');
	const response = await api.get('locations', cookies.get('jwt'));
	const locations = filterLocations(response.result);
	return {
		locations
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async ({ cookies }) => {
		const jwt = cookies.get('jwt');
		if (!jwt) throw fail(400);
		const response = await api.del('locations', jwt);
		console.log(response);

	}
}