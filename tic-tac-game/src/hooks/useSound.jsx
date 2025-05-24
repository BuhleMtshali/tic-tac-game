import useSound from 'use-sound';
import clickSfx from '../assets/click.mp3';
import winSfx from '../assets/win.mp3';

export function useGameSounds() {
  const [playClick] = useSound(clickSfx);
  const [playWin] = useSound(winSfx);
  return { playClick, playWin };
}