<script setup>
import { reactive, ref } from "vue";
import FeatureBlock from "@/components/home/features/FeatureBlock.vue";

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
import accessibilityHelperGif from "@/assets/gifs/accessibility-helper.gif";

let gutter = 40;
let showAllFeatures = ref(false);
let focusedFeature = reactive({ data: null });
let features = reactive([
  {
    title: "Profiles",
    image: profilesGif,
    preview: "Create profiles and switch between them in a blink of an eye.",
    description: `
You can define as many profiles as you want. Almost every setting from the Settings page can be controlled by a profile.
When you have more than one profile, a button for fast profiles switching appears in the top-left corner of the popover.

By creating and using new profiles, you can instantly change application settings.
For example, you may have <b>"Sitting"</b> and <b>"Standing"</b> and <b>"Silent"</b> profiles.
The first has standard (25/5) timing settings. The second has extended timings (40/10).
The third doesn't play any sounds for notifying the user. 
    `,
    isLarge: false,
  },
  {
    title: "Rich settings, ultimate customization",
    image: settingsGif,
    preview: "Customize every aspect of the application.",
    description: `
Automato is a very flexible application. You can see lots of different configurable parameters in the Settings page.

<h2>Profile switcher</h2>

There's a top level controls group which allows to you manipulate application profiles. Here you can create, remove or select profiles.
When a profile is selected, almost all the settings you see are stored under this profile.
<b>Reset to defaults</b> resets almost all the settings but only for the current active profile.

<h2>Common settings tab</h2>

<b>Work Phase time</b> and <b>Walk Phase time</b> are the main setting for configure working and resting time intervals.
<b>Sound volume</b> setting applied to all sounds played by the app in all phases.
<b>End of Work phase sound</b> and <b>End of Walk phase sound</b> controls allow you to change melodies or even disable them by selecting the <code>"--- Not selected ---"</code> dropdown option.

<h2>Automation settings tab</h2>

<i>Note: Focus and Overwork phases are only when Automato is in the "Auto" mode!</i>

<b>Focus Phase time</b> setting allows you to set a time interval during which the application expects from you making persistent activity.
The Focus Phase precedes the Working Phase and the main purpose is to prevent accidental activation of the Working Phase.
For example, if you accidentally pressed any key or moved the mouse, then the Focus Phase starts, but if no activity will be shown during the next 5 seconds, then the timer will be reset back.

The Overwork Phase starts right after the Work Phase finishes. Automato immediately notifies you about the end of the Work Phase and waits you to stop making any activity.
The <b>Inactivity time to consider you're away</b> setting determines the timeframe you should not to do any activity at all to activate the Walk Phase.

To make Automato fully autonomous, it's suggested to enable these settings as well:
<b>Start app automatically on system startup</b> and <b>Start timer automatically on application startup</b>.

<h2>Detection settings tab</h2>

<i>Note: All he settings in this tab are only applied when Automato is in the "Auto" mode!</i>

There are settings for two similar scenarios:
<ul>
  <li>When no activity has been detected during Work Phase.</li>
  <li>When persistent activity has been detected during Walk Phase.</li>
</ul>

In both cases, Automato notifies you about it. If you ignore the notification, Automato performs according measures. 
For example, if you're still working during Walk Phase, then Automato will turn on the Work Mode with 1 minute left.
Another axample: if you're not doing anything with the computer during the Work Phase, then Automato will show the popover
with the notification. If you press any key or move the mouse, touch the touchpad, then Automato will hide the warning. 
If you ignore the warning, the Focus Phase will be activated.
`,
    isLarge: true,
  },
  {
    title: "Three modes",
    image: modesGif,
    preview:
      "Start timer manual, or configure autostart, or even allow Automato to decide for you.",
    description: `
There are three levels of automation to choose from.

<b>Manual mode</b> requires you to start and stop timers manually. This can be useful, when you want to have full control over the application.
Also manual mode is useful when you learn something from video and not actively interact with the computer (which makes Auto mode not so useful).

<b>Semi-automatic</b> mode is almost the same as <b>Manual mode</b> but here you define timers automaticla start.
If both toggles are enabled, Work and Walk phases will run one after another in a cycle. 
All you need is to react when it's time to work and when it's time to rest.

<b>Auto mode</b> is a very advanced mode. It tracks your activity (key presses, mouse movements, touchpad gestures) and starts and stops the timers fully automatically.
It also can react when you're not active when you should be working, and react when you're active when you should be resting.
This mode has a wide variety of settings, to tune the application's behaviour according your preferences.

<u>Note that the <b>Auto mode</b> requires the Accessibility permission in the macOS "Security & Privacy" system settings.</u>
`,
    isLarge: false,
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
  },
  {
    title: "Accessibility helper",
    image: accessibilityHelperGif,
    preview:
      "Easily grant Accessibility permission if you want to use the Auto mode",
    description: `
If you started Automato the first time, and if you want to use the Auto mode, then you need to grant the Accessibility permission. 
The helper button has been implemented to make this process easier for you. Just press this button and follow the instructions.
`,
    isLarge: true,
  },
  {
    title: "Fast postpone",
    image: fastPostponeGif,
    preview: "Ultra-fast extra time by one click!",
    description: `
True ninja don't even open the app to postpone the timer! One click with right mouse button – and it's done!
`,
    isLarge: false,
  },
  {
    title: "Custom postpone",
    image: customPostponeGif,
    preview: "Another handy way to postpone",
    description: `
Press and hold the OPTION key while clicking to the postpone button.
`,
    isLarge: false,
  },
  {
    title: "Skip phases",
    image: skipButtonGif,
    preview: "Just straight into the next phase",
    description: `
Tired already? Skip the Work Phase and start resting. Rested already? Skip the Walk Phase and start working.
`,
    isLarge: false,
  },
]);

function getFeatures() {
  return showAllFeatures.value ? features : features.slice(0, 3);
}
</script>

<template>
  <section class="section" id="section-features">
    <template v-if="focusedFeature.data != null">
      <FeatureBlock
        v-bind="{ ...focusedFeature.data }"
        :isFocused="true"
        @unfocus="focusedFeature.data = null"
      />
    </template>
    <div class="container text-center">
      <h2 class="heading">Features</h2>
      <div
        v-masonry
        class="masonry"
        transition-duration="1s"
        fit-width="true"
        item-selector=".masonry-item"
        :gutter="gutter"
      >
        <FeatureBlock
          v-for="(feature, featureIndex) in getFeatures()"
          v-bind="{ ...feature }"
          :style="{ 'margin-bottom': gutter + 'px' }"
          :key="featureIndex"
          @focus="focusedFeature.data = feature"
        />
      </div>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg"
        :class="{ 'd-none': showAllFeatures }"
        @click="showAllFeatures = true"
      >
        Show all features
      </button>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: rgb(245, 247, 249);
}
@media only screen and (max-width: 600px) {
  .section {
    margin-top: 100px;
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 440px) {
  .section {
    padding-bottom: 10px;
  }
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
</style>
