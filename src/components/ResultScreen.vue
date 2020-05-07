<template>
  <div class="jumbotron alert alert-info">
    <h3 class="display-4">Fin</h3>
    <p class="lead">Success: {{ stats.success }}</p>
    <p class="lead">Error: {{ stats.error }}</p>
    <hr class="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-warning" @click="$emit('repeat')">Repeat</button>
      <button type="button" class="btn btn-warning" @click="$emit('nextLevel')">Next Level</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stats"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
