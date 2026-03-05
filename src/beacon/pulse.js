import { readResonance } from '../lumen/resonance.js'

// The beacon flashes once every thousand cycles of the true note,
// but never faster than four times a second.
export function pulseIntervalMs(crystal) {
  return Math.max(250, 1_000_000 / readResonance(crystal))
}
