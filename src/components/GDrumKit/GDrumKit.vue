<script setup lang="ts">
import keyCombos from "@/config/KeyCombos";
import GDrum from "@/components/GDrum/GDrum.vue";
</script>

<template>
  <div class="drum-kit">
    <GDrum
      v-for="(keyCombo, index) in keyCombos"
      :key="`${index}-${keyCombo.drum}`"
      :kbd-key="keyCombo.kbdKey"
      :kbd-key-name="keyCombo.kbdKeyName"
      :sound="keyCombo.drum"
      :path="`./src/assets/sounds/${keyCombo.drum}.wav`"
    />
  </div>
</template>

<style lang="css" src="./GDrumKit.css"></style>
