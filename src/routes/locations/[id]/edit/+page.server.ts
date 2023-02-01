import { error, redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { isNumber } from '$lib/utils';

export const load = (async ({ locals, params }) => {
	if (locals?.user?.role !== 'admin') throw redirect(307, '/locations');
	const { jwt } = locals.user;
	const id = params.id;
	if (!id) goto('/locations');
	const response = await api.get(`locations/${id}`, jwt);
	if (!response.ok) throw error(404, { message: response.result });
	return { location: response.result };
}) satisfies PageServerLoad;

export const actions: Actions = {
	edit: async ({ locals, params, request }) => {
		if (!locals.user) throw redirect(307, '/');
		const data = await request.formData();
		const payload = Object.fromEntries(data.entries());
		const id = params.id;
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
		const response = await api.patch(
			`locations/${id}`,
			payload,
			locals.user.jwt
		);
		return response;
	},
	delete: async ({ cookies, locals, params }) => {
		if (!locals.user) throw redirect(307, '/');
		const jwt = cookies.get('jwt');
		if (!jwt) throw redirect(307, '/');
		const id = params.id;
		const response = await api.del(`locations/${id}`, jwt);
		if (!response.ok) throw error(404, { message: response.result });
		return response.result;
	}
};
