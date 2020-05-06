<template>
  <div class="training container">
    <h1>Math training</h1>
    <hr>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Можно выводить компоненты самостоятельным или двойным тэгом
        <app-message/> 
        <app-message></app-message> -->
        <app-start-screen v-if="state == 'start'" @onStart="onStart"/>
        <app-question v-else-if="state == 'question'"/> 
        <app-message v-else-if="state == 'message'"/>        
        <app-result-screen v-else-if="state == 'screen'"/> 
        
        <div v-else>Unknown state</div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      state: 'start'
    }
  },
  methods: {
    onStart(){
      this.state = 'question'
    }
  }

}
</script>

<style scoped>
.training{
  text-align: center;
}
</style>
