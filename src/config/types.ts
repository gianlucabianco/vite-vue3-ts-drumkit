export type KbdKey = "A" | "S" | "D" | "F" | "G" | "H" | "J" | "K" | "L";

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
  key: KbdKey;
  fn?: () => void;
  action?: () => void;
}

export interface Event {
  key: string;
}

export interface CssClasses {
  [key: string]: boolean;
}

export type KeyCombos = KeyCombo[];
