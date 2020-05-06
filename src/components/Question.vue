<template>
  <div class="jumbotron alert alert-primary">
    <h3 class="display-4">Perform arithmetic</h3>
    <p class="lead h1">{{ x }} + {{ y }} = ?</p>
    <hr class="my-4" />
    <p>Choose the appropriate option</p>
    <div class="d-flex justify-content-around">
      <!-- <button
        type="button"
        v-bind:key="number"
        class="btn btn-light"
        v-for="number in answer"
      >{{ number }}</button>-->
      <button
        type="button"
        class="btn btn-light"
        v-bind:key="number"
        v-for="number in answer"
      >{{ number }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: mtRandom(100, 200),
      y: mtRandom(100, 200)
    };
  },
  computed: {
    answer() {
      const good = this.x + this.y;
      let res = [good];

      while (res.length < 4) {
        const num = mtRandom(good + 20, good - 20);

        if (res.indexOf(num) === -1) {
        // if (!res.includes(num)) {
          res.push(num);
        }
      }

      return res.sort(function() {
        return Math.random() > 0.5;
      });
    }
  }
};
let mtRandom = (min, max) => {
  let diff = max - min;
  return Math.floor(Math.random() * (diff + 1)) + min;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
