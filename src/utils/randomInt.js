export function randomInt(min = -100, max = 100) {
	return Math.floor(Math.random() * (max - min)) + min;
}