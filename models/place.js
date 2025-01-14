export class Place {
	constructor({ id, title, imageUri, location }) {
		const { lat, lng, address } = location;
		this.id = id;
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = { lat, lng };
	}
}
