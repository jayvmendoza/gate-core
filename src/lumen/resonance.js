import { sampleCached } from './cache.js'

// Reads the crystal's true note.
// Listeners: seal/threshold.js, beacon/pulse.js
export function readResonance(crystal) {
  const hz = sampleCached(crystal)
  return hz
}
