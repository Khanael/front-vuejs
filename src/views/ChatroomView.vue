<script>
  import ChatroomShow from '../components/ChatroomShow.vue'
  export default {
    components: {
      ChatroomShow
    }
  }
</script>

<template>
  <div class="about">
    <ChatroomShow />
  </div>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
