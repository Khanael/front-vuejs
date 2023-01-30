<template>
  <div class="item">
    <i class="fas fa-comment"></i>
    <div class="details">
      <div v-for="message in messages">
        <p>{{ message.content }}</p>
      </div>
      <input type="text" v-model="content">
      <button @click="sendMessage">Envoyer</button>
    </div>
  </div>
</template>

<script setup>
  // Call the API on http://localhost:3000/chatrooms/:id to get the chatroom messages and display it in the template.
  import { ref, onMounted } from 'vue'

    const messages = ref([])
    const content = ref('')

    onMounted(async() =>{
      const url = window.location.href;
      const lastParam = url.split("/").slice(-1)[0];

      const response = await fetch(`http://localhost:3000/chatrooms/${lastParam}`)
      const data = await response.json()
      messages.value = data
    })



    const sendMessage = async() => {
      const url = window.location.href;
      const lastParam = url.split("/").slice(-1)[0];
      const API_URL = `http://localhost:3000/chatrooms/${lastParam}/messages`

        const res = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            content: content.value,
            chatroom_id: lastParam,
            user_id: 11
          })
        })

        const data = await res.json()

        messages.value.push(data)

        content.value = ''

      }
</script>
