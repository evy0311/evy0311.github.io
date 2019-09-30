// ONLOAD

window.onload = function () {
	var il = new Il();
	il.beginFlying();
};


// CLASSES

function Il() {
	var activities = ['code', 'think', 'learn', 'study', 'laugh', 'work', 'play', 'bike'];
	var currentIndex = 0;
	var nextActivity = function() {
		currentIndex = currentIndex + 1 < activities.length ? currentIndex + 1 : 0;
	};
	var activityElement = $('#flyup');
	var flyActivities = function() {
		activityElement.fadeOut(200, function () {
			nextActivity();
			activityElement.text(activities[currentIndex]);
		}).fadeIn(200);
	};

	this.beginFlying = function() {
		setInterval(flyActivities, 2000);
	};
	return this;
}
