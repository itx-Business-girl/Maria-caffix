<script setup>
import HeaderComponent from './components/Header-component.vue'
import NewsletterComponent from './components/Newsletter-component.vue'
import { onMounted, onUnmounted } from 'vue'

const show = () => {
  document.querySelectorAll('.reveal').forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight - 100) {
      item.classList.add('show')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', show)
  show()
})

onUnmounted(() => {
  window.removeEventListener('scroll', show)
})
</script>

<template>
  <HeaderComponent />

  <RouterView />

  <NewsletterComponent />
</template>

<style>
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: 0.8s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

* {
  box-sizing: border-box;
}

</style>

