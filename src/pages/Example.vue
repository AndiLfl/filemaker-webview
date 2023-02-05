<template>
  <p style="margin: auto">{{text}}</p>
</template>

<script setup>

import useExample from "../composables/example.js";
import {onMounted} from "vue";
import eventbus from "../../eventbus.js";

const {text, setText} = useExample();

onMounted(() => {
  eventbus.$on('example:setText', setText)
})

</script>

<style scoped>

</style>