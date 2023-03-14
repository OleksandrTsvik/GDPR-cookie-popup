import { useEffect } from 'react';

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

import { config } from './config';

import './style.css';

export default function CookieConsent() {
	useEffect(() => {
		if (!document.getElementById('cc--main')) {
			window.CookieConsentApi = window.initCookieConsent();
			window.CookieConsentApi.run(config);
		}
	}, []);

	return null;
}