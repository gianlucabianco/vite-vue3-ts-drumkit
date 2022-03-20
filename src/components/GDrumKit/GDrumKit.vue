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
      :sound="keyCombo.drum"
    />
  </div>
</template>
