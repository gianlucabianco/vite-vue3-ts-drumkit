export type KbdKey =
  | "KeyA"
  | "KeyS"
  | "KeyD"
  | "KeyF"
  | "KeyG"
  | "KeyH"
  | "KeyJ"
  | "KeyK"
  | "KeyL";

export type KbdKeyName = "A" | "S" | "D" | "F" | "G" | "H" | "J" | "K" | "L";

export type Sound =
  | "clap"
  | "hihat"
  | "kick"
  | "openhat"
  | "boom"
  | "ride"
  | "snare"
  | "tom"
  | "tink";

export interface KeyCombo {
  kbdKey: KbdKey;
  kbdKeyName: KbdKeyName;
  drum: Sound;
  action?: () => void;
}

export interface Event {
  code: string;
}

export interface CssClasses {
  [key: string]: boolean;
}

export type KeyCombos = KeyCombo[];
