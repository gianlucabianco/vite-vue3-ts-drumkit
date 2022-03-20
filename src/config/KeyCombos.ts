/**
 * This file is used to map key combos to actions.
 * New key combos can be added by adding a new object to
 * the array and updating the key combos in the code and
 * the KeyCombos.ts file.
 */
import type { KeyCombos } from "@/config/types";

const keyCombos: KeyCombos = [
  {
    kbdKey: "KeyA",
    drum: "clap",
  },
  {
    kbdKey: "KeyS",
    drum: "hihat",
  },
  {
    kbdKey: "KeyD",
    drum: "kick",
  },
  {
    kbdKey: "KeyF",
    drum: "openhat",
  },
  {
    kbdKey: "KeyG",
    drum: "boom",
  },
  {
    kbdKey: "KeyH",
    drum: "ride",
  },
  {
    kbdKey: "KeyJ",
    drum: "snare",
  },
  {
    kbdKey: "KeyK",
    drum: "tom",
  },
  {
    kbdKey: "KeyL",
    drum: "tink",
  },
];

export default keyCombos;
