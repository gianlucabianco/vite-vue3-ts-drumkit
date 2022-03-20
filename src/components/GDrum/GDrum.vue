<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import type { PropType } from "vue";
import type { KbdKey, Sound, CssClasses, KeyCombo } from "@/config/types";

import userKeydown from "@/composables/UserKeydown";
import { playSound } from "@/composables/PlaySound";

const props = defineProps({
  /**
   * Keyboard key type.
   * It could be configured in '@/config/KeyCombos'.
   * To see the current configured kbdKeys, mouse hover the KbdKey type.
   */
  kbdKey: {
    type: String as PropType<KbdKey>,
    required: true,
  },
  /**
   * Drum sound
   * It could be configured in '@/config/KeyCombos'.
   * To see the current configured kbdKeys, mouse hover the Sound type.
   */
  sound: {
    type: String as PropType<Sound>,
    required: true,
  },
});

/**
 * isPlaying stores the state internal state of the component.
 * If true, the component is playing.
 */
const isPlaying = ref(false);

/**
 * togglePlay method toggles the state of isPlaying.
 */
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

/**
 * keyCombo is the key combination of keyboard key, sound and callback function
 * that triggers the component.
 */
const keyCombo = {
  kbdKey: props.kbdKey,
  drum: props.sound,
  action: () => playSound(props.sound, togglePlay),
};

/**
 * cssClasses sets css dynamic classes for the component.
 * It is computed from the props, and handles the representional
 * state of the component.
 */
const classes = computed((): CssClasses => {
  return {
    "is-playing": isPlaying.value,
  };
});

onMounted(() => {
  /**
   * Register the keyCombo to the userKeydown.
   * This will trigger the callback function when the keyCombo is pressed.
   */
  userKeydown([keyCombo as KeyCombo]);
});
</script>

<template>
  <div class="drum" :class="classes">
    <kbd class="kbd-key">{{ props.kbdKey }}</kbd>
    <span class="sound">{{ props.sound }}</span>
  </div>
</template>

<style lang="css" src="./GDrum.css"></style>
