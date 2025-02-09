function solution() {
	// TODO: Assign values to your your variables here to complete the story!
	// homeTown (string);
	// heroAge (number);
	// heroName (string);
	// publicPlace (string);
	// dangerousActivity (string);
	// noun (string);
	// bodyPart (string);
	// energyLevel (number);
	// distance (number);
	// eventCount (number);
	// animal (string);
	// funnyLocation (string);
	// largeIndoorObject (string);
	// isEnergyControlled (boolean);
	// isExperimentalSuccess (boolean);
	// targetScore (number);

	// Write your code here
	let homeTown;
	let heroAge;
	let heroName;
	let publicPlace;
	let dangerousActivity;
	let noun;
	let bodyPart;
	let energyLevel;
	let distance;
	let eventCount;
	let animal;
	let funnyLocation;
	let largeIndoorObject;
	let isEnergyControlled;
	let isExperimentalSuccess;
	let targetScore;
	
	/* ************************************ *| 
	
		Don't modify the code below this line
		Don't modify the code below this line
		Don't modify the code below this line
		Don't modify the code below this line
		Don't modify the code below this line
	
	/* ************************************ */

	const store = {
		homeTown: { type: 'string' },
		heroAge: { type: 'number' },
		heroName: { type: 'string' },
		dangerousActivity: { type: 'string' },
		publicPlace: { type: 'string' },
		noun: { type: 'string' },
		bodyPart: { type: 'string' },
		energyLevel: { type: 'number' },
		animal: { type: 'string' },
		funnyLocation: { type: 'string' },
		largeIndoorObject: { type: 'string' },
		distance: { type: 'number' },
		isEnergyControlled: { type: 'boolean' },
		eventCount: { type: 'number' },
		isExperimentalSuccess: { type: 'boolean' },
		targetScore: { type: 'number' },
	};

	try {
		store.homeTown.value = homeTown;
		store.heroAge.value = heroAge;
		store.heroName.value = heroName;
		store.dangerousActivity.value = dangerousActivity;
		store.publicPlace.value = publicPlace;
		store.noun.value = noun;
		store.bodyPart.value = bodyPart;
		store.energyLevel.value = energyLevel;
		store.animal.value = animal;
		store.funnyLocation.value = funnyLocation;
		store.largeIndoorObject.value = largeIndoorObject;
		store.distance.value = distance;
		store.isEnergyControlled.value = isEnergyControlled;
		store.eventCount.value = eventCount;
		store.isExperimentalSuccess.value = isExperimentalSuccess;
		store.targetScore.value = targetScore;

		// Update each variable slot in the story
		document.querySelectorAll('.variable-slot').forEach((slot) => {
			const varName = slot.dataset.variable;
			const variable = store[varName];

			if (typeof variable.value === 'undefined') {
				slot.classList.remove('filled', 'error');
				return;
			}

			if (typeof variable.value === 'string' && variable.value.length === 0)
				return;

			if (
				typeof variable.value === 'number' &&
				(variable.value <= 0 || !Number.isInteger(variable.value))
			)
				return;

			if (typeof variable.value !== variable.type) {
				slot.textContent = `[${typeof variable.value}]`;
				slot.classList.add('error');
				slot.classList.remove('filled');
				return;
			}

			slot.textContent = String(variable.value);
			slot.classList.add('filled');
			slot.classList.remove('error');
		});
	} catch (err) {
		console.error(err);
	}
	return store;
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', solution);
} else {
	Promise.resolve().then(() => {
		solution();
	});
}

export { solution };
