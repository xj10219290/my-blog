<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
    <img @load="imageLoader" class='origin' :src="src" alt="" :style="{
        opacity: originOpacity,
        transition: `${durtion}ms`
    }">    
  </div>
</template>

<script>
export default {
    props:{
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        durtion: {
            type: Number,
            default: 1000
        }
    },
    data(){
        return {
            originLoaded: false,
            everythingDone: false
        }
    },
    computed: {
        originOpacity(){
            return this.originLoaded? 1: 0
        }
    },
    methods: {
        imageLoader(){
            this.originLoaded = true
            setTimeout(()=>{
                this.everythingDone = true
                this.$emit('load','allDone,picshow')
            }, this.durtion)
        }
    }

}
</script>

<style lang="less">
@import '~@/styles/mixin.less';
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        .self-fill();
        object-fit: cover;
    }
    .placeholder {
        filter: blur(2vw)
    }
}
</style>