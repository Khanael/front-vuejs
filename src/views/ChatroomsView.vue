<script>
import ChatroomIndex from '../components/ChatroomIndex.vue'
export default {
  components: {
    ChatroomIndex
  }
}
</script>

<template>
  <div class="about">
    <ChatroomIndex />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
