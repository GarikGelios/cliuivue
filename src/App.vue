<template>
  <div class="training container">
    <h1>Math training. Level {{ level +1 }}</h1>
    <hr />
    <div class="progress mb-3">
  <div class="progress-bar" :style="progressStyles" role="progressbar"></div>
</div>
    <div class="">
      <transition name="flip" mode="out-in">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- Можно выводить компоненты самостоятельным или двойным тэгом
        <app-message/> 
        <app-message></app-message>-->
        <app-start-screen v-if="state == 'start'" @onStart="onStart" />

        <app-question
          v-else-if="state == 'question'"
          @succes="onQuestSucces"
          @error="onQuestionError"
          :settings="levels[level]"
        />

        <app-message
          v-else-if="state == 'message'"
          :type="message.type"
          :text="message.text"
          :textsmall="message.textsmall"
          @onNext="onNext"
        />

        <app-result-screen 
          v-else-if="state == 'result'" 
          :stats="stats"
          @repeat="onStart"
          @nextLevel="onNextLevel"
        />

        <div v-else>Unknown state</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "start",
      stats: {
        success: 0,
        error: 0
      },
      message: {
        type: "",
        text: ""
      },
      questMax: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 40,
          range: 5,
          variants:2
          },
        {
          from: 100,
          to: 200,
          range: 20,
          variants:4
          },
        {
          from: 500,
          to: 900,
          range: 40,
          variants: 6
          }
      ]
    };
  },
  computed: {
    questDone() {
      return this.stats.success + this.stats.error;
    },
    progressStyles(){
      return {
        width: (this.questDone / this.questMax * 100) + '%'
      }
    }
  },
  methods: {
    onStart() {
      this.state = "question";
      this.stats.success = 0;
      this.stats.error = 0;
    },
    onQuestSucces() {
      this.state = "message";
      this.message.text = "Good Job!";
      this.message.textsmall = "...yes you are smart.";
      this.message.type = "success";
      this.stats.success ++;
      console.log(this.stats.success, '   ', this.stats.error, '   ', this.questDone ,'   ', this.questMax)
    },
    onQuestionError(msg) {
      this.state = "message";
      this.message.text = msg;
      this.message.textsmall = "try again...";
      this.message.type = "danger";
      this.stats.error ++;
      console.log(this.stats.success, '   ', this.stats.error, '   ', this.questDone ,'   ', this.questMax)
    },
    onNext() {
      if(this.questDone < this.questMax){
        this.state = "question";
      } 
      else {
        this.state = "result";
      }
    },
    onNextLevel(){
      this.level ++;
      this.onStart();
    }
  }
};
</script>

<style scoped>
.training {
  text-align: center;
}

.progress-bar {
  transition: width 0.5s;
}

.flip-enter,
.flip-enter-active {
  animation: flipInX 0.3s linear;
}
.flip-leave,
.flip-leave-active {
  animation: flipOutX 0.3s linear;
}

@keyframes flipInX {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

@keyframes flipOutX {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
}
</style>
