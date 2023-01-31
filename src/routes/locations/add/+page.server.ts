import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad} from './$types';
import { isNumber } from '$lib/utils';

export const load = (async ({ cookies, locals }) => {
	if (!locals.user) throw redirect(307, '/');
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const jwt = cookies.get('jwt');
		if (!jwt) throw redirect(307, '/')
		const data = await request.formData();
		const payload = Object.fromEntries(data.entries());
		if (isNumber(payload.geolocationX) && isNumber(payload.geolocationY)) {
			const x = Number(payload.geolocationX);
			const y = Number(payload.geolocationY);
			payload.geolocation = {
				coordinates: [x, y],
				type: String(payload.geolocationType)
			};
		} else {
			payload.geolocation = {
				coordinates: [0, 0],
				type: String(payload.geolocationType)
			};
		}
		delete payload.geolocationX;
		delete payload.geolocationY;
		delete payload.geolocationType;
		const response = await api.post('locations', payload, jwt)
		return response;
	}
}