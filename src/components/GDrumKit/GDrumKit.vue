<script setup lang="ts">
import keyCombos from "@/config/KeyCombos";
import GDrum from "@/components/GDrum/GDrum.vue";
</script>

<template>
  <div class="drum-kit">
    <GDrum
      v-for="({ drum, kbdKey, kbdKeyName }, index) in keyCombos"
      :key="`${index}-${drum}`"
      :kbd-key="kbdKey"
      :kbd-key-name="kbdKeyName"
      :sound="drum"
      :path="`./src/assets/sounds/${drum}.wav`"
    />
  </div>
</template>

<style lang="css" src="./GDrumKit.css" scoped></style>
