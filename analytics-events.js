// analytics-events.js

function trackLevelStart(levelName) {
	gtag('event', 'start_level', {
		event_category: 'gameplay',
		event_label: levelName,
	});
}

function trackLevelComplete(levelName) {
	gtag('event', 'complete_level', {
		event_category: 'gameplay',
		event_label: levelName,
	});
}

function trackScrollCollected(scrollId) {
	gtag('event', 'collect_scroll', {
		event_category: 'gameplay',
		event_label: 'Scroll ' + scrollId,
	});
}

function trackLevelRestart(levelName) {
	gtag('event', 'restart_level', {
		event_category: 'gameplay',
		event_label: levelName,
		value: 1,
	});
}
