import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';

type LocationProps = {
	_id: object,
	filmType: string,
	filmProducerName: string,
	endDate: string,
	filmName: string,
	district: string,
	geolocation: {
		coordinates: Array<number>,
		type: string
	},
	sourceLocationId?: string,
	filmDirectorName: string,
	address: string,
	startDate: string,
	year: string,
	__v?: number
}

const cleanLocationKeys = {
	filmType: 'Type',
	filmProducerName: 'Producer',
	endDate: 'Ended at',
	startDate: 'Started at',
	filmName: 'Name',
	district: 'District',
	filmDirectorName: 'Director',
	address: 'Address',
	year: 'Year'
}

export const load = (async ({ cookies, locals }) => {
	if (!locals.user) throw redirect(307, '/');
	const response = await api.get('locations', cookies.get('jwt'));
	const results = response.result;
	const cleanKeys = Object.keys(cleanLocationKeys);
	const locations = results.map((location: LocationProps) => { // transform our results to new clean locations with clean keys
		const renamedKeyLocation = {};
		for (const [key, value] of Object.entries(location)) {
			if (!cleanKeys.includes(key)) continue;
			const newKey = cleanLocationKeys[key];
			renamedKeyLocation[newKey] = ((key === 'endDate' || key === 'startDate') ? new Date(value).toLocaleDateString() : value);
		}
		return renamedKeyLocation
	})

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