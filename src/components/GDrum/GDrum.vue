<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

import type { KbdKey, Sound, CssClasses } from "@/config/types";

// props
const props = defineProps({
  /**
   * Keyboard key type ("A" | "S" | "D" | "F" | "G" | "H" | "J" | "K" | "L")
   */
  kbdKey: {
    type: String as PropType<KbdKey>,
    required: true,
  },
  /**
   * Drum sound
   */
  sound: {
    type: String as PropType<Sound>,
    required: true,
  },
  /**
   * Handles the representional state of the component
   */
  isPlaying: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

// computed
const classes = computed((): CssClasses => {
  const { isPlaying } = props;

  return {
    "is-playing": isPlaying,
  };
});
</script>

<template>
  <div class="drum" :class="classes">
    <kbd class="kbd-key">{{ props.kbdKey }}</kbd>
    <span class="sound">{{ props.sound }}</span>
  </div>
</template>

<style lang="css" src="./GDrum.css"></style>
