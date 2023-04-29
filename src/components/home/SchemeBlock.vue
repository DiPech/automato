<script setup>
</script>

<template>
  <section class="section" id="section-scheme">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>This is how Automato works</h2>
          <img src="@/assets/scheme.png" alt="Scheme" />
        </div>
        <div class="col-12 col-md-8 offset-md-2">
          <ol>
            <li>
              <b>Focus phase</b> is the first phase which starts after you launch the app. This phase is typically short and take 15 seconds.
              During this phase Automato checks if you actively doing something on your computer. And in case if you do – Automato switches on the next phase.
              But if not, then you return to the start. This phase is needed to prevent accidentally timer starts (hello to cats walking on a keyboard).
            </li>
            <li>
              <b>Work phase</b> is the main phase during which you actively work on your computer for 25 minutes (you can configure this interval in the settings).
              If Automato detects that you are not active (e.g. not moving your mouse, not typing anything, not scrolling, and so on) then it notifies you first,
              then (after some time) you will be returned back to the <u>Focus phase</u>.
            </li>
            <li>
              25 minutes went by and now you need to take a break. To be sure that you really stopped working, Automato transitions to the <b>Overwork Phase</b>.
              This is the shortest phase, but it's very crucial. During this phase, Automato notifies you (by playing music and sending notifications) that you should stop
              working and take a break (it means, not typing, not moving your mouse, not scrolling, and so on). And when it happens, Automato switches to the next phase.
            </li>
            <li>
              Consider doing something useful and physically active during the <b>Rest Phase</b>, for example, you can go to the kitchen and drink some water, or do 10 squats.
              During this phase Automato detects if you do some activity on your computer. If you do, then Automato notifies you first, then
              (after some consistent activity time during Rest Phase) the timer will be postponed, which means you will be returned back to the <u>Work Phase</u> with
              <code>01:00</code> remaining time. But if you diligently rested for 5 minutes, then it means you returned back to <u>Focus Phase</u> (and the cycle starts again).
              Automato plays a sound when transitioning to the Focus phase, so most likely won't miss that moment.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  text-align: center;
}
img {
  margin: 0 auto;
  max-width: 100%;
  max-height: 400px;
}
ol {
  margin-top: 20px;
}
ol li {
  font-size: 18px;
}
</style>
