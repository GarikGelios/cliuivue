<template>
  <div class="jumbotron alert alert-primary">
    <h3 class="display-4">Perform arithmetic</h3>
    <p class="lead h1">{{ x }} + {{ y }} = ?</p>
    <hr class="my-4" />
    <p>Choose the appropriate option</p>
    <div class="d-flex justify-content-around">
      <button
        type="button"
        class="btn btn-light"
        v-bind:key="number"
        v-for="number in answer"
        @click="onAnswer(number)"
      >{{ number }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['settings'],
  data() {
    return {
      x: mtRandom(this.settings.from, this.settings.to),
      y: mtRandom(this.settings.from, this.settings.to)
    };
  },
  computed: {
    good(){
      return this.x + this.y
    },
    answer() {
      let res = [this.good];

      while (res.length < this.settings.variants) {
        let num = mtRandom(this.good + this.settings.range, this.good - this.settings.range);

        if (res.indexOf(num) === -1) {
        // if (!res.includes(num)) {
          res.push(num);
        }
      }

      return res.sort(function() {
        return Math.random() > 0.5;
      });
    }
  },
  methods: {
    onAnswer(num){
      if(num == this.good){
        this.$emit('succes')
      }
      else {
        this.$emit('error', `${this.x} + ${this.y} = ${this.good}`)
      }

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
