<template>
  <div class="jumbotron alert alert-secondary">
  <h3 class="display-4">Are you ready?</h3>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <button class="btn btn-success btn-lg" @click="$emit('onStart')">Start</button>
</div>
</template>

<script>
export default {
  methods: {
    some(){
      alert(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
