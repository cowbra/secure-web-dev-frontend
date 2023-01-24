import type { LocationProps } from "../types/location";

const cleanLocationKeys = {
	_id: 'id',
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

export const filterLocations = (locations: Array<LocationProps>) => {
    const cleanKeys = Object.keys(cleanLocationKeys);
	const filteredLocations = locations.map((location: LocationProps) => { // transform our results to new clean locations with clean keys
		const renamedKeyLocation = {};
		for (const [key, value] of Object.entries(location)) {
			if (!cleanKeys.includes(key)) continue;
			const newKey = cleanLocationKeys[key];
			renamedKeyLocation[newKey] = ((key === 'endDate' || key === 'startDate') ? new Date(value).toLocaleDateString() : value);
		}
		return renamedKeyLocation
	})
    return filteredLocations;
} 