<template>
  <div class="item">
    <i class="fas fa-comment"></i>
    <div class="details">
      <div v-for="chatroom in chatrooms">
        <a :href="`chatrooms/${chatroom.id}`">{{ chatroom.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  // Call the API on http://localhost:3000/chatrooms to get the chatroom list and display it in the template.
  export default {
    name: 'ChatroomIndex',

    data() {
      return {
        chatrooms: []
      }
    },
    async created() {
      const response = await fetch('http://localhost:3000/chatrooms')
      const data = await response.json()
      this.chatrooms = data
    }
  }
</script>
