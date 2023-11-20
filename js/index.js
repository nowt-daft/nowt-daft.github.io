const REVEAL_WAIT_TIME = 3000;

const EVENT_URL = `https://www.eventbrite.com/e/battle-of-the-bands-tickets-754562786607`;
const FB_ID = '61551782625558';
// const FB_URL = `https://www.facebook.com/profile.php?id=${ FB_ID }`;
const FB_URL = `https://www.facebook.com/events/359456003112585`;
const INSTA_URL = `https://www.instagram.com/tablefortytwoentertainment/`;

const NEW_TAB = '_blank';

const start_time = Date.now();

const buttons =
[
	[
		'tickets',
		EVENT_URL
	],
	[
		'facebook',
		FB_URL
	],
	[
		'instagram',
		INSTA_URL
	]
].map(
	([
		type,
		url
	]) => {
		const btn =
			document.querySelector(
				`li a.${ type }`
			);
		btn.addEventListener(
			'click',
			e => {
				e.stopPropagation();
				e.preventDefault();

				window.open(
					url,
					NEW_TAB
				);
			}
		);
		return btn;
	}
);

document.addEventListener(
	'DOMContentLoaded',
	e => {
		const delta_time =
			Date.now() - start_time;
		
		console.log(
			delta_time
		);

		if (delta_time >= REVEAL_WAIT_TIME)
			reveal();
		else
			setTimeout(
				reveal,
				REVEAL_WAIT_TIME - delta_time
			);
	}
);

function reveal() {
	console.log('REVEAL');
	document
		.querySelector('html')
			.classList
			.add('ready');
}