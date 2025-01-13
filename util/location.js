import { GOOGLE_MAP_API_KEY } from '@env';

export const getMapPreview = ({ lat, lng }) => {
	const WIDTH = 400;
	const HEIGHT = 200;
	const MAPTYPE = 'roadmap';
	const MARKER_COLOR = 'red';
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=${WIDTH}x${HEIGHT}&maptype=${MAPTYPE}&markers=color:${MARKER_COLOR}%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;

	return imagePreviewUrl;
};
