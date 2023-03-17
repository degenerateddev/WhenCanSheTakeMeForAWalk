// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type LongLat = {
	lon: number;
	lat: number;
}

type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
}

type MainData = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

type WindData = {
	speed: number;
	deg: number;
}

type CloudData = {
	all: number;
}

type LocationData = {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface WeatherData {
	coord: LongLat;
	weather: Array<Weather>;
	base: string;
	main: MainData;
	visibility: number;
	wind: WindData;
	clouds: CloudData;
	dt: number;
	sys: LocationData;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
