import { readResonance } from '../lumen/resonance.js'

// The beacon flashes once every thousand cycles of the true note.
export function pulseIntervalMs(crystal) {
  return 1_000_000 / readResonance(crystal)
}
