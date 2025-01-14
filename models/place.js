export class Place {
	constructor({ title, imageUri, location }) {
		const { lat, lng, address } = location;
		this.id = new Date().toString() + Math.random().toString();
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = { lat, lng };
	}
}
