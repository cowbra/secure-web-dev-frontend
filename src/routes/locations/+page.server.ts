import { error, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { filterLocations } from '$lib/utils';

export const load = (async ({ locals, url }) => {
	if (!locals.user) throw redirect(307, '/login');
	try {
		const pageIndex = url.searchParams.get('page');
		const page = Number.isInteger(pageIndex) ? parseInt(pageIndex,10) : 0;
		const response = await api.get(`locations?offset=${page * 20}`, locals?.user?.jwt);
		const locations = filterLocations(response?.result);
		return {
			locations
		};
	} catch (err) {
		throw error(404)
	}
	
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async ({ locals }) => {
		if (!locals.user) throw error(401);
		const response = await api.del('locations', locals.user?.jwt);
		console.log(response);
	}
};
