const REVEAL_WAIT_TIME = 3000;

const EVENT_URL = `https://www.eventbrite.com/e/battle-of-the-bands-tickets-754562786607`;

const FB_ID = '61551782625558';
const FB_URL = `https://www.facebook.com/profile.php?id=${ FB_ID }`;

const NEW_TAB = '_blank';

const start_time = Date.now();

const buttons =
[
	[
		'tickets',
		e => {
			if (confirm('Tickets go on sale Thursday November 9, 2023'))
				window.open(
					EVENT_URL,
					NEW_TAB
				);
		}
	],
	[
		'facebook',
		e => {
			window.open(
				FB_URL,
				NEW_TAB
			);
		}
	],
	[
		'instagram',
		e => {
			alert('LINK NOT YET AVAILABLE');
		}
	]
].map(
	([
		type,
		listener
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

				listener(e);
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