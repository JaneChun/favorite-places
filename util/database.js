import * as SQLite from 'expo-sqlite';
import { Place } from '@/models/place';

let db;

const getDbInstance = async () => {
	if (!db) {
		db = await SQLite.openDatabaseAsync('places');
	}
	return db;
};
export const init = async () => {
	await getDbInstance();

	return await db.execAsync(
		`CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );`,
	);
};

export const insertPlace = async ({ place }) => {
	const {
		title,
		imageUri,
		address,
		location: { lat, lng },
	} = place;

	console.log(title, imageUri, address, lat, lng);
	return await db.runAsync(
		'INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)',
		title,
		imageUri,
		address,
		lat,
		lng,
	);
};

export const fetchPlaces = async () => {
	const data = await db.getAllAsync('SELECT * FROM places');

	const places = data.map(({ id, title, imageUri, address, lat, lng }) => {
		const place = new Place({
			id,
			title,
			imageUri,
			location: { lat, lng, address },
		});
		return place;
	});

	return places;
};
