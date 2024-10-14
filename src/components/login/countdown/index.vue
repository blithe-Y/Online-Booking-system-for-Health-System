<script setup lang="ts">
import {ref, watch} from "vue";

let time = ref<number>(5);
const props = defineProps(['flag'])
const $emit = defineEmits(['getFlag']);
watch(
    () => props.flag,
    () => {
        let timer = setInterval(() =>{
          time.value--;
          if(time.value ===0){
            $emit('getFlag', false);
            clearInterval(timer);
          }

        },1000)

    },
    {
      immediate: true,
    }

);

</script>

<template>
  <span>获取验证码({{time}}s)</span>
</template>

<style scoped>

</style>
