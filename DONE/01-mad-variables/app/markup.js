export const dupeMarkup = `
<div class="story-container">
			<div class="typewriter">
				<h1>Story Variables</h1>
			</div>

			<div class="story-preview">
				<p>
					Once upon a time, there was a
					<span class="variable-slot" data-variable="heroName"
						>___________</span
					>
					who was
					<span class="variable-slot" data-variable="heroAge">___</span>
					years old. They loved to
					<span class="variable-slot" data-variable="heroHobby"
						>___________</span
					>
					every single day.
				</p>
				<p>
					One day, while carrying
					<span class="variable-slot" data-variable="numberOfSnacks">___</span>
					magical snacks in their backpack, they discovered they could
					<span class="variable-slot" data-variable="magicalAbility"
						>___________</span
					>!
				</p>
				<p>
					When asked if they would use this power for good, they responded with
					a confident
					<span class="variable-slot" data-variable="isHero">_____</span>.
				</p>
			</div>

			<div class="code-hint">
				<pre><code>// Declare your variables here to complete the story!
// Example: let heroName = "Luna";</code></pre>
			</div>

			<div class="buttons">
				<button id="checkStory" class="glow-button">Preview Story</button>
				<button id="resetStory" class="reset-button">Reset</button>
			</div>
		</div>
`;
