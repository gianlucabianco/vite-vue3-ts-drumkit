<script setup lang="ts">
import { ref } from "vue";
import GDrum from "@/components/GDrum/GDrum.vue";
const isPlaying = ref(false);
</script>

<template>
  <main>
    <GDrum
      kbdKey="A"
      sound="clap"
      :is-playing="isPlaying"
      @click="isPlaying = !isPlaying"
    />
  </main>
</template>
