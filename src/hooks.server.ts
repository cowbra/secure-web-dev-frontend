/** @type {import('@sveltejs/kit').Handle} */

import type { HooksProps } from './$types'

export function handle({ event, resolve }: HooksProps) {
	const jwt = event.cookies.get('jwt');
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;

	return resolve(event);
}