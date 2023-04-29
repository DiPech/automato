<script setup>
let year = new Date().getFullYear()
</script>

<template>
  <section class="section" id="section-footer">
    <p>Automato, {{ year }}</p>
    <p class="legal-links">
      <a href="/privacy.html" target="_blank">
        Privacy policy
      </a>
    </p>
  </section>
</template>

<style scoped>
#section-footer {
  font-size: 18px;
  text-align: center;
  padding: 30px 30px;
}

.legal-links {
  margin-bottom: 0;
  font-size: 14px;
}

.legal-links a {
  text-decoration: none;
  color: black;
  font-weight: 300;
}
</style>
