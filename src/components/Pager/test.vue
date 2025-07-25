<template>
  <div>
    <h1>Test Pager</h1>
    <Pager :current="current" :total="300" @pageChange="pageChangeHandler($event)"></Pager>
  </div>
</template>

<script>
import Pager from './';

export default {
  components: {
    Pager
  },
  data(){
    return {
      current: 1
    }
  },
  methods: {
    pageChangeHandler($event){
      console.log($event);
      this.current = $event
    }
  }
}
</script>