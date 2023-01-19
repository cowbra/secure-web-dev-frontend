import type { LayoutServerLoad } from './$types';
import * as api from '$lib/api';

export const load = (async ({ cookies }) => {
	const jwt = cookies.get('jwt');
	const response = await api.get('users/me', jwt);
	return { user: response.ok ? response.result : null };
}) satisfies LayoutServerLoad;
