// https://github.com/orestbida/cookieconsent/tree/v2.8
// https://stackblitz.com/edit/nextjs-euxk9k?file=components%2FCookieConsentConfig.js

export const config = {
	// cookie_expiration: 0.0000000001, // a popup will appear after each page reload
	delay: 1000,
	gui_options: {
		consent_modal: {
			layout: 'bar', 					// box/cloud/bar
			position: 'bottom center', 		// bottom/middle/top + left/right/center
			transition: 'slide', 			// zoom/slide
			swap_buttons: true 				// enable to invert buttons
		},
		settings_modal: {
			layout: 'bar', 					// box/bar
			position: 'left', 				// left/right
			transition: 'slide' 			// zoom/slide
		}
	},
	current_lang: 'en',
	languages: {
		en: {
			consent_modal: {
				title: 'We use cookies!',
				description: 'Hi, this website uses essential cookies to ensure its proper operation and ' +
					'tracking cookies to understand how you interact with it. The latter will be set only ' +
					'after consent. ' +
					'<button type="button" data-cc="accept-necessary" class="cc-link">Reject all</button>',
				primary_btn: {
					text: 'Accept all',
					role: 'accept_all' // 'accept_selected' or 'accept_all'
				},
				secondary_btn: {
					text: 'Settings',
					role: 'settings' // 'settings' or 'accept_necessary'
				},
			},
			settings_modal: {
				title: 'Cookie Settings',
				save_settings_btn: 'Save settings',
				accept_all_btn: 'Accept all',
				reject_all_btn: 'Reject all',
				close_btn_label: 'Close',
				blocks: [
					{
						title: 'Cookie usage 📢',
						description: 'We use cookies to ensure the basic functionalities of the website and to enhance ' +
							'your online experience. You can choose for each category to opt-in/out whenever you want. ' +
							'For more details relative to cookies and other sensitive data, please read the full ' +
							'<a href="https://weirdorconfusing.com/privacy/" class="cc-link" target="_blank">privacy policy</a>.'
					},
					{
						title: 'Right to be informed',
						description: 'The website provides information about the types of information it collects and how it uses it.',
						toggle: {
							value: 'informed', // your cookie category
							enabled: true,
							readonly: false // cookie categories with readonly=true are all treated as "necessary cookies"
						}
					},
					{
						title: 'Right of access',
						description: 'Data subjects have the right to request access to the personal data held about them by the website.',
						toggle: {
							value: 'access',
							enabled: true,
							readonly: false
						}
					},
					{
						title: 'Right to rectification',
						description: 'Data subjects have the right to request the correction of inaccurate personal data.',
						toggle: {
							value: 'rectification',
							enabled: true,
							readonly: false
						}
					},
					{
						title: 'Right to erasure',
						description: 'Data subjects have the right to request the deletion of their personal data.',
						toggle: {
							value: 'erasure',
							enabled: true,
							readonly: false
						}
					},
					{
						title: 'Right to restrict processing',
						description: 'Data subjects have the right to request the restriction of the processing of their personal data.',
						toggle: {
							value: 'restrict processing',
							enabled: true,
							readonly: false
						}
					},
					{
						title: 'Right to data portability',
						description: 'Data subjects have the right to request a copy of their personal data in a machine-readable format.',
						toggle: {
							value: 'data portability',
							enabled: true,
							readonly: false
						}
					},
					{
						title: 'Right to object',
						description: 'Data subjects have the right to object to the processing of their personal data.',
						toggle: {
							value: 'object',
							enabled: false,
							readonly: false
						}
					},
					{
						title: 'Rights related to automated decision making and profiling',
						description: 'Data subjects have the right to object to automated decision making and profiling.',
						toggle: {
							value: 'automated decision making and profiling',
							enabled: false,
							readonly: false
						}
					},
					{
						title: 'More information',
						description:
							'For any queries in relation to our policy on cookies and your choices, ' +
							'please <a href="https://weirdorconfusing.com/terms/#contact-us" ' +
							'class="cc-link" target="_blank">contact us</a>.'
					}
				]
			}
		}
	}
};