import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import type { LocationProps } from '$lib/types/location';

export const load = (async ({ params, locals }) => {
  if (!locals.user) throw redirect(307, '/');
  const id = params.id;
  if (!id) goto('/locations');
  return await api.get(`locations/${id}`);
}) satisfies PageServerLoad;