export type LocationProps = {
	_id: object,
	filmType: string,
	filmProducerName: string,
	endDate: Date,
	filmName: string,
	district: string,
	geolocation: {
		coordinates: Array<number>,
		type: string
	},
	sourceLocationId?: string,
	filmDirectorName: string,
	address: string,
	startDate: Date,
	year: string,
    __v?: number
}

export type FilteredLocationProps = {
    id: string,
    Type: string,
    Producer: string,
    'Ended at': Date,
    'Started at': Date,
    Name: string,
    District: string,
    Director: string,
    Address: string,
    Year: string   
}