import { error, redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import type { Actions, PageServerLoad} from './$types';
import { filterOneLocation } from '$lib/utils';

export const load = (async ({ cookies, locals, params }) => {
	if (!locals.user) throw redirect(307, '/');
	const jwt = cookies.get('jwt');
	if (!jwt) throw redirect(307, '/')
	const id = params.id;
	if (!id) goto('/locations');
	const response = await api.get(`locations/${id}`, jwt);
	if (!response.ok) throw error(404,{ message: response.result });
	return { location: filterOneLocation(response.result) };
}) satisfies PageServerLoad;

export const actions: Actions = {
	edit: async ({cookies, locals, params, request}) => {
		if (!locals.user) throw redirect(307, '/');
		const jwt = cookies.get('jwt');
		if (!jwt) throw redirect(307, '/')
		const id = params.id;
		console.log(`Edit ${id}}`);
	},
	delete: async ({cookies, locals, params, request}) => {
		if (!locals.user) throw redirect(307, '/');
		const jwt = cookies.get('jwt');
		if (!jwt) throw redirect(307, '/')
		const id = params.id;
		console.log(`Delete ${id}`)
	}, 
}