import { MAX_STREAM_SIZE, MIN_STREAM_SIZE, STREAM_MUTATION_CHANCE, VALID_CHARS } from './config';
import { randomInt } from '../../utils/randomInt';

export function getRndChar() {
	return VALID_CHARS[randomInt(0, VALID_CHARS.length - 1)];
}

export function getRndStream() {
	return new Array(randomInt(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
		.fill(null).map((_) => getRndChar());
}

export function getMutatedStream(stream) {
	const newStream = stream.slice(1);
	// const newStream = [...stream];

	for (let i = 1; i < stream.length; i++) {
		if (Math.random() < STREAM_MUTATION_CHANCE) {
			newStream[i - 1] = getRndChar();
		}
	}

	newStream.push(getRndChar());
	// newStream[newStream.length - 1] = getRndChar();

	return newStream;
}

export function getCharStyle(indexCurrentChar, lengthAllChars) {
	return {
		// marginTop: -12,
		color: indexCurrentChar === lengthAllChars - 1
			? '#ffffff'
			: undefined,
		opacity: indexCurrentChar < 6
			? 0.1 + indexCurrentChar * 0.15
			: 1,
		textShadow: indexCurrentChar === lengthAllChars - 1
			? '0 0 20px #ffffff'
			: undefined
	};
}