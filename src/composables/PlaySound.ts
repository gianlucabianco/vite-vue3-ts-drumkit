import type { Sound } from "@/config/types";

/**
 * When invoked, the playSound function plays a sound.
 * It handles also a state callback, useful to trigger
 * custom behavior where the function is used.
 *
 * The path to where the sound asset is located is
 * passed as a parameter.
 */
export const playSound = (
  sound: Sound,
  path: string,
  handleStateCallBack: () => void
): void => {
  /**
   * The Audio() constructor creates and returns a new HTMLAudioElement
   * used in this project to manage and play audio.
   * For further details, see:
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
   */
  const audio = new Audio(path);

  if (!audio) return;

  /**
   * The user could chose to play the sound multiple times.
   * This is to prevent the sound from playing multiple times.
   * The handleStateCallBack should handle the state of the
   * component in which the sound is playing.
   */
  audio.currentTime = 0;
  handleStateCallBack();

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
      /**
       * After the sound is played, the handleStateCallBack should handle
       * the state of the component in which the sound is played.
       */
      handleStateCallBack();
    })
    .catch((err) => {
      console.error(`${sound} sound error: ${err}`);
    });
};
