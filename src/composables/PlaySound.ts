import type { Sound } from "@/config/types";
// TODO: this function should work with both capital and lowercase letters

export const playSound = (sound: Sound): void => {
  // TODO: DOCUMENT THE AUDIO CONSTRUCTOR
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
  const audio = new Audio(`./src/assets/sounds/${sound}.wav`);

  if (!audio) return;

  audio.currentTime = 0;

  /**
   * HTMLMediaElement interface includes the play method.
   *
   * This method starts or resumes playback of the media.
   * The play method returns a Promise that resolves when
   * the sound has started playing.
   *
   * To handle the case where the sound is already playing,
   * the play method can be called again, and the currentTime setted to 0.
   * After the promise resolves, the media element is in the
   * playing state, and a then() method can be used to handle the
   * event when the sound has finished playing.
   *
   * For further details see:
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
   */

  audio
    .play()
    .then(() => {
      // TODO: when audio is done, stop the button animation
      console.log(`${sound} sound played`);
    })
    .catch((err = `${sound} sound could not be played`) => {
      console.error(`${sound} sound error: ${err}`);
    });
};
