<template>
  <div>
    <app-bar></app-bar>
    <router-view/>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
export default {
  components:{
    AppBar
  }
}
</script>