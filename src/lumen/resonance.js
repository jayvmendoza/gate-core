import { sample } from './sample.js'

// Reads the crystal's true note.
// Listeners: seal/threshold.js, beacon/pulse.js
export function readResonance(crystal) {
  const hz = sample(crystal)
  return hz
}
