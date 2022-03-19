import { playSound } from "@/composables/PlaySound";
import type { KeyCombos } from "@/config/types";

const keyCombos: KeyCombos = [
  {
    key: "A",
    action: () => playSound("clap"),
  },
  {
    key: "S",
    action: () => playSound("hihat"),
  },
  {
    key: "D",
    action: () => playSound("kick"),
  },
  {
    key: "F",
    action: () => playSound("openhat"),
  },
  {
    key: "G",
    action: () => playSound("boom"),
  },
  {
    key: "H",
    action: () => playSound("ride"),
  },
  {
    key: "J",
    action: () => playSound("snare"),
  },
  {
    key: "K",
    action: () => playSound("tom"),
  },
  {
    key: "L",
    action: () => playSound("tink"),
  },
];

export default keyCombos;
