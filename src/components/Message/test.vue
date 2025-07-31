<template>
  <div class="message-container">
    <h1>Message Component</h1>
    <p>This is a placeholder for the message component.</p>
    <Message>
      <h2>Custom default</h2>
      <p>This is the default slot content.</p>
      <p>You can put any content here.</p>
      <template v-slot:footer>
        <h2>Custom Footer</h2>
      </template>
      <template v-slot:header>
        <h2>Custom Header</h2>
      </template>
    </Message>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  components: {
    Message,
  },
};
</script>

<style>
</style>