import { error, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { filterLocations } from '$lib/utils';
import type { LocationsLoadValues } from '$lib/types/location';

export const load = (async ({ locals, url }): Promise<LocationsLoadValues> => {
	if (!locals.user) throw redirect(307, '/login');
	try {
		const pageIndex = url.searchParams.get('page') ?? '1';
		const index = parseInt(pageIndex, 10);
		const page = Math.max(index - 1, 0); // non negative value possible
		const response = await api.get(
			`locations?offset=${page >= 1 ? page * 20 : 0}`,
			locals?.user?.jwt
		);
		const locations = filterLocations(response?.result);
		return {
			locations,
			index
		};
	} catch (err) {
		// if anything else than number in url parameter
		throw error(404);
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async ({ locals }) => {
		if (!locals.user) throw error(401);
		const response = await api.del('locations', locals.user?.jwt);
		console.log(response);
	}
};
