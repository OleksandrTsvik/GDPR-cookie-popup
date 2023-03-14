import { useState } from 'react';
import useInterval from '@use-it/interval';

import { FONT_HEIGHT, REFRESH_RATE_MS, SPEED_STREAM_PX } from './config';
import { getCharStyle, getMutatedStream, getRndStream } from './utils';

import styles from './BackgroundMatrix.module.css';

export default function StreamMatrix() {
	const [stream, setStream] = useState(getRndStream());
	const [marginTop, setMarginTop] = useState(stream.length * -FONT_HEIGHT);

	useInterval(() => {
		if (marginTop > window.innerHeight) {
			setMarginTop(stream.length * -FONT_HEIGHT);
		} else {
			setMarginTop(marginTop + SPEED_STREAM_PX);
			setStream(getMutatedStream);
		}
	}, REFRESH_RATE_MS);

	return (
		<div
			style={{ marginTop }}
			className={styles.stream}
		>
			{stream.map((char, index) => (
				<span
					key={index}
					style={getCharStyle(index, stream.length)}
				>
					{char}
				</span>
			))}
		</div>
	);
}