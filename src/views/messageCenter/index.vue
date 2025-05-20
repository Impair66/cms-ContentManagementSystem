<template>
  <div class="message-center">
    <h1>Message Center</h1>
    <div class="message-list">
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageCenter",
  data() {
    return {
      messages: [
        "Welcome to the Message Center!",
        "You have 3 new notifications.",
      ],
    };
  },
};
</script>

<style scoped>
.message-center {
  padding: 20px;
}

.message-list ul {
  list-style-type: none;
  padding: 0;
}

.message-list li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
