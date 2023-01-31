import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import { filterOneLocation  } from '$lib/utils';

export const load = (async ({cookies, params, locals }) => {
  if (!locals.user) throw redirect(307, '/');
  const jwt = cookies.get('jwt');
  if (!jwt) throw redirect(307, '/')
  const id = params.id;
  if (!id) goto('/locations');
  const response = await api.get(`locations/${id}`, jwt);
  if (!response.ok) return { message: response.result }
  return { location: filterOneLocation(response.result) };
}) satisfies PageServerLoad;