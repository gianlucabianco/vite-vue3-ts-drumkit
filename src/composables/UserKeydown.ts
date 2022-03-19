/**
 * This file contains the useKeydown function,
 * which can be used via composition API
 */

import { onBeforeUnmount } from "vue";

import type { KeyCombo, Event, KeyCombos } from "@/config/types";

const useKeydown = (keyCombos: KeyCombos) => {
  const onKeyDown = (event: Event) => {
    const targetKeyCombo = keyCombos.find((keyCombo: KeyCombo) => {
      return keyCombo?.key === event?.key;
    });
    targetKeyCombo?.action && targetKeyCombo.action();
  };

  window.addEventListener("keydown", onKeyDown);

  onBeforeUnmount(() => window.removeEventListener("keydown", onKeyDown));
};

export default useKeydown;
