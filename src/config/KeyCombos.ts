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
    kbdKeyName: "A",
    drum: "clap",
  },
  {
    kbdKey: "KeyS",
    kbdKeyName: "S",
    drum: "hihat",
  },
  {
    kbdKey: "KeyD",
    kbdKeyName: "D",
    drum: "kick",
  },
  {
    kbdKey: "KeyF",
    kbdKeyName: "F",
    drum: "openhat",
  },
  {
    kbdKey: "KeyG",
    kbdKeyName: "G",
    drum: "boom",
  },
  {
    kbdKey: "KeyH",
    kbdKeyName: "H",
    drum: "ride",
  },
  {
    kbdKey: "KeyJ",
    kbdKeyName: "J",
    drum: "snare",
  },
  {
    kbdKey: "KeyK",
    kbdKeyName: "K",
    drum: "tom",
  },
  {
    kbdKey: "KeyL",
    kbdKeyName: "L",
    drum: "tink",
  },
];

export default keyCombos;
