<script setup lang="ts">
import {computed, reactive, ref} from 'vue'

defineProps<{ min: number, max: number }>()

const state = reactive({
  min: 0,
  max: 100,
})
const generated = ref<number>();

// const isOdd = computed(() => {
//   return generated % 2 === 0;
// })

const generate = () => {
  let localMin = Math.ceil(state.min);
  let localMax = Math.floor(state.max);

  // The maximum is exclusive and the minimum is inclusive
  generated.value = Math.floor(Math.random() * (localMax - localMin) + localMin)
}
</script>

<template>
  <form class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-min">
          Min
        </label>
      </div>
      <div class="md:w-2/3">
        <input
            v-model="state.min"
            @input="generate"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-min" type="number">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-max">
          Max
        </label>
      </div>
      <div class="md:w-2/3">
        <input
            v-model="state.max"
            @input="generate"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-max" type="number">
      </div>
    </div>

    <p class="text-2xl font-bold">Generated number: <span class="text-gray-700 ">{{ generated }}</span></p>
  </form>

</template>

<style scoped>

</style>