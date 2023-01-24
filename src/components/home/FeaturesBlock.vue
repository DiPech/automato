<script setup>
import { reactive, computed } from "vue";

import modesGif from "@/assets/gifs/modes.gif";
import settingsGif from "@/assets/gifs/settings.gif";
import profilesGif from "@/assets/gifs/profiles.gif";
import rewindGif from "@/assets/gifs/rewind-by-click.gif";
import detectInactivityGif from "@/assets/gifs/detect-inactivity.gif";
import detectActivityGif from "@/assets/gifs/detect-activity.gif";
import pauseButtonGif from "@/assets/gifs/pause-button.gif";
import postponeButtonGif from "@/assets/gifs/postpone-button.gif";
import fastPostponeGif from "@/assets/gifs/fast-postpone.gif";
import stopForGif from "@/assets/gifs/stop-for.gif";
import customPostponeGif from "@/assets/gifs/custom-postpone.gif";
import skipButtonGif from "@/assets/gifs/skip-button.gif";

let gutter = 40;
let features = reactive([
  {
    title: "Profiles",
    image: profilesGif,
    preview: "Create profiles and switch between them in a blink of an eye.",
    description: `
You can define as many profiles as you want. Each profile stores almost every setting from the Settings page.
When you have more than one profile, then a button for fast profiles switching appears in the top-left corner of the popover.

By creating and using new profiles, you can instantly change application settings. 
For example, you may have <b>"Sitting"</b> and <b>"Standing"</b> and <b>"Silent"</b> profiles.
The first has standard (25/5) timing settings. The second has extended timings (40/10).
The third doesn't play any sounds for notifying the user.
    `,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Rich settings, ultimate customization",
    image: settingsGif,
    preview: "Customize every aspect of the application.",
    description: `
Automato is a very flexible application. You can see lots of different configurable parameters in the Settings page.

Description for every setting will be described later.
`,
    isLarge: true,
    isFocused: false,
  },
  {
    title: "Three modes",
    image: modesGif,
    preview:
      "Start timer manual, or configure autostart, or even allow Automato to decide for you.",
    description: `
There are three levels of automation to choose from.
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Detect inactivity during Work Phase",
    image: detectInactivityGif,
    preview: "Be notified if you've been distracted from your work.",
    description: `
Sometimes life brings chaos in our lives. You may be distracted by thousands of reasons.
But this is not a problem hence Automato is like your digital companion who will notify you if you've been distracted!
The application automatically in the background detects inactivity (no mouse movements, no key presses, no touchpad gestures for a while).
See how it looks like in action in the video.
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Detect activity during Rest Phase",
    image: detectActivityGif,
    preview:
      "Be notified if you're still working when you're supposed to be resting.",
    description: `
If you got back to work too early, then Automato will detect it and notify you about it. 
If you ignore the notification, automatical postpone will be activated.
The postpone event will turn on Work Phase with 1 minute timer left.
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Pit-stop for a while",
    image: stopForGif,
    preview:
      "Ideally for meetings or if you don't want to be distracted at all.",
    description: `
This allows to stop the application for a given period of time. The timer will be restarted after that period.
It's very useful for meetings, for gaming sessions, for films watching, or for whatever reason you may want not to be notified by Automato.`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Time rewinding",
    image: rewindGif,
    preview: "Easily configure timer's time value if you really need it.",
    description: `
This feature might be convenient when you want to set smaller work session for one individual timer session.
Or when you want to postpone for a larger period of time rather than 1 minute.
With this feature you can precisely control the timer value whenever you want it.`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Take a pause",
    image: pauseButtonGif,
    preview: "If you really need this ;)",
    description: `
Sometimes you need to take a very short break during the working session.
The best option would be just do the break without pausing, because manual pausing requires manual unpausing, 
which may lead to forgetting pressing the unpause button.

But if you really need this, we got this tool for you ;)
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Add extra time",
    image: postponeButtonGif,
    preview: "Still has unfinished chunk of work?",
    description: `
Well, timer is over, but you need extra 1-2 minutes to finish the current task. I understand.
This is where the Postpone button comes handy! This button adds one minute to the timer. 
If you were in Resting Phase, this button will also return you back to the Working Phase.
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Fast postpone",
    image: fastPostponeGif,
    preview: "Ultra-fast extra time by one click!",
    description: `
True ninja don't even open the app to postpone the timer! One click – and it's done!
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Custom postpone",
    image: customPostponeGif,
    preview: "Another handy way to postpone",
    description: `
Press and hold the OPTION key while clicking to the postpone button.
`,
    isLarge: false,
    isFocused: false,
  },
  {
    title: "Skip phases",
    image: skipButtonGif,
    preview: "Just right into the next phase",
    description: `
Tired already? Skip the work phase and go resting. Rested already? SKip the rest phase and go working.
`,
    isLarge: false,
    isFocused: false,
  },
]);

function focusFeature(feature) {
  feature.isFocused = true;
}

function hideFocusedFeature() {
  features.forEach((f) => (f.isFocused = false));
}

function renderDescription(description) {
  return description
    .split("\n\n")
    .map((str) => "&nbsp;".repeat(3) + str)
    .join("<br><br>");
}

const hasFocusedFeature = computed(() => features.find((f) => f.isFocused));
</script>

<template>
  <main id="features">
    <div
      class="focused-feature-fade"
      v-if="hasFocusedFeature"
      @click="hideFocusedFeature()"
    ></div>
    <div class="container text-center">
      <h2 class="heading">Features</h2>
      <div
        v-masonry="containerId"
        class="masonry"
        transition-duration="0.3s"
        fit-width="true"
        item-selector=".masonry-item"
        :gutter="gutter"
      >
        <div
          v-masonry-tile
          class="masonry-item feature"
          v-for="(feature, featureIndex) in features"
          :class="{ large: feature.isLarge, focused: feature.isFocused }"
          :style="{ 'margin-bottom': gutter + 'px' }"
          :key="featureIndex"
          @click="focusFeature(feature)"
        >
          <div class="title">{{ feature.title }}</div>
          <template v-if="!feature.isFocused">
            <div class="image-wrapper">
              <img :src="feature.image" class="image" />
            </div>
            <div class="description">
              {{ feature.preview }}
              <br /><span class="link">read more</span>
            </div>
          </template>
          <template v-if="feature.isFocused">
            <div class="row">
              <div class="col-sm-6">
                <div class="image-wrapper">
                  <img :src="feature.image" class="image" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="description text-center text-sm-start">
                  <span v-html="renderDescription(feature.description)"></span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#features {
  margin-top: 200px;
  padding-bottom: 100px;
  background-color: rgb(245, 247, 249);
}
.heading {
  display: inline-block;
  margin-top: 50px;
  margin-bottom: 70px;
  font-size: 3.5rem;
  font-weight: 700;
  color: rgb(25, 25, 25);
}
.masonry {
  margin: 0 auto;
}
.feature {
  background-color: white;
  width: 400px;
  padding: 1rem 2rem;
  border: 1px solid rgb(233 234 235);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
  cursor: pointer;
}
.feature.large {
  width: 840px;
}
@media only screen and (max-width: 1440px) {
  .feature.large {
    width: 400px;
  }
}
.focused-feature-fade {
  z-index: 998;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-color: gray; */
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  cursor: pointer;
  overflow-y: hidden;
  overscroll-behavior: contain;
}
.feature.focused {
  z-index: 999;
  position: fixed !important;
  width: 90% !important;
  height: auto !important;
  max-height: 90%;
  left: 5% !important;
  top: 5% !important;
  cursor: auto;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.feature .title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}
.feature.focused .title {
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
.feature .image {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
}
.feature .description {
  margin-top: 10px;
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(60, 65, 70);
}
.feature.focused .image {
  width: auto;
  max-width: 100%;
  max-height: 550px;
  margin-bottom: 15px;
}
.feature.focused .description {
  margin-top: 15px;
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.feature .link {
  color: rgb(4, 105, 255);
  font-style: italic;
  text-decoration: none;
}
.feature .link:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 440px) {
  .feature {
    width: 100% !important;
    margin-bottom: 10px !important;
  }
}
</style>
