<template>
    <div class="message-container">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>
.message-container {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

</style>