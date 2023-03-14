import { FONT_WIDTH } from './config';
import StreamMatrix from './StreamMatrix';

import styles from './BackgroundMatrix.module.css';

export default function BackgroundMatrix() {
	const countStreamMatrix = Math.floor(window.innerWidth / FONT_WIDTH);

	return (
		<div className={styles.background}>
			{new Array(countStreamMatrix)
				.fill(null)
				.map((_, index) => (
					<StreamMatrix key={index} />
				))
			}
		</div>
	);
}