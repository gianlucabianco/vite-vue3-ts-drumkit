/**
 * This file contains the useKeydown function,
 * which can be used via composition API.
 * It create an event listener for keydown events,
 * and calls the action function of the key combo.
 */

import { onBeforeUnmount } from "vue";

import type { KeyCombo, Event, KeyCombos } from "@/config/types";

const useKeydown = (keyCombos: KeyCombos) => {
  const onKeyDown = (event: Event) => {
    const targetKeyCombo = keyCombos.find((keyCombo: KeyCombo) => {
      return keyCombo?.kbdKey === event?.code;
    });
    targetKeyCombo?.drum && targetKeyCombo?.action && targetKeyCombo.action();
  };

  window.addEventListener("keydown", onKeyDown);

  onBeforeUnmount(() => window.removeEventListener("keydown", onKeyDown));
};

export default useKeydown;
