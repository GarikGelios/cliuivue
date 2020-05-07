<template>
  <div class="jumbotron alert" :class="'alert-' + type">
    <h3 class="display-4">{{ text }}</h3>
    <p class="lead h1">{{ textsmall }}</p>
    <hr class="my-4" />
    <p>message</p>
    <div class="d-flex justify-content-around">
      <button
        type="button"
        class="btn btn-light"
        @click="$emit('onNext')"
      >Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type','text', 'textsmall']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
