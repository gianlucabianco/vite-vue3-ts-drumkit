<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import type { PropType } from "vue";
import type {
  KbdKey,
  KbdKeyName,
  Sound,
  CssClasses,
  KeyCombo,
} from "@/config/types";

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
   * Keyboard key name displayed to the user.
   * It could be configured in '@/config/KeyCombos'.
   * To see the current configured kbdKeyName, mouse hover the KbdKey name.
   */
  kbdKeyName: {
    type: String as PropType<KbdKeyName>,
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
  /**
   * Sound path
   * Sets the location of the sound asset.
   */
  path: {
    type: String as PropType<string>,
    required: true,
  },
  /**
   * Sound delay
   * Sets the delay of the sound asset, in ms.
   */
  delay: {
    type: Number as PropType<number>,
    default: 70,
  },
});

/**
 * isPlaying stores the state internal state of the component.
 * If true, the component is playing.
 */
const isPlaying = ref(false);

/**
 * togglePlay method toggles the state of isPlaying.
 * The delay is paired with the style to guarantee a smooth transition.
 */
const togglePlay = () => {
  if (isPlaying.value) {
    setTimeout(() => {
      isPlaying.value = false;
    }, props.delay);
  } else isPlaying.value = true;
};

/**
 * keyCombo is the key combination of keyboard key, keyboard key name, sound and callback function
 * that triggers the component.
 */
const keyCombo = {
  kbdKey: props.kbdKey,
  kbdKeyName: props.kbdKeyName,
  drum: props.sound,
  action: () => playSound(props.sound, props.path, togglePlay),
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

const delayInSeconds = computed((): string => {
  return `${props.delay / 1000}s`;
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
    <kbd class="kbd-key-name">{{ kbdKeyName }}</kbd>
    <span class="sound">{{ sound }}</span>
  </div>
</template>

<style lang="css" src="./GDrum.css" scoped></style>

<style lang="css" scoped>
.drum {
  transition: all v-bind("delayInSeconds") ease;
}
</style>
