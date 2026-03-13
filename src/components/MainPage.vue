<template>
  <div class="container">
    <p>Мини кликер по фану:</p>

    <button @click="clickHandler" :class="button" :disabled="isButtonDisabled">
      Кликни меня: {{ count }}
    </button>
    <p v-if="count === 50">Уже 50 кликов!</p>
    <p v-if="count === 100">Уже 100 кликов! Тебе не надоело?</p>
    <p v-if="count === 200">Уже 200 кликов! Теперь +2 за клик!</p>
    <button
      :id="true"
      class="true-button"
      v-if="count == 100"
      @click="count = 0"
    >
      Да!
    </button>
    <button
      :id="false"
      class="false-button"
      v-if="count == 100"
      @click="count = count + 25"
    >
      Нет!
    </button>
    <p v-if="button = false">Молодец) Кликай дальше!</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStorage } from "@vueuse/core";

let count = useStorage("count", 0);
const isButtonDisabled = ref(false);

function disableButtonFor(seconds = 2) {
  isButtonDisabled.value = true;
  setTimeout(() => {
    isButtonDisabled.value = false;
  }, seconds * 1000);
}

function clickHandler() {
  if (count.value >= 200) {
    count.value += 2;
  } else {
    count.value += 1;
  }
  if ([50, 100, 200].includes(count.value)) {
    disableButtonFor(2);
  }
}
watch(count, (newCount) => {
  localStorage.setItem("count", newCount);
});
</script>

<style>
.container {
  min-height: 95px;
  display: grid;
  place-items: center;
}
.button {
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
  size: 1cap;
}
.true-button {
  background-color: cadetblue;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
}
.false-button {
  background-color: rgb(243, 1, 1);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
}
</style>
