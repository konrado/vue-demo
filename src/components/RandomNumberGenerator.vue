<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

defineProps<{ min: number, max: number }>()

const state = reactive({
  min: 0,
  max: 100,
})
const generated = ref<number>(0);

const divisorsToCheck: Set<number> = new Set([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
]);

onMounted(() => {
  generate();
})

function divisibleBy(anyNumber: number): boolean {
  return generated.value % anyNumber === 0;
}

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
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-min">
          Min
        </label>
      </div>
      <div class="md:w-3/4">
        <input v-model="state.min" @input="generate"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-min" type="number">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-max">
          Max
        </label>
      </div>
      <div class="md:w-3/4">
        <input v-model="state.max" @input="generate"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-max" type="number">
      </div>
    </div>

    <p class="text-xl font-bold text-left mb-2">Generated number: <span class="text-blue-500 ">{{ generated }}</span></p>
    <div class="grid grid-cols-8 gap-1 mb-1" >
      <template v-for="divisor in divisorsToCheck">
        <div class="col-span-1">
          <CheckCircleIcon class="h-6 w-6" :class="divisibleBy(divisor) ? 'divisible' : 'not-divisible'" />
        </div>
        <div class="col-span-3">
          divisible by <span class="font-bold">{{ divisor }}</span>
        </div>
      </template>
       
      </div>
  </form>

</template>

<style scoped>
.divisible {
  @apply text-green-600
}

.not-divisible {
  @apply text-gray-400
}
</style>