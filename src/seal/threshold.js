import { readResonance } from '../lumen/resonance.js'
import { wards } from '../wards.js'

// The seal opens only when the crystal holds the true note.
export function sealShouldOpen(crystal) {
  const hz = readResonance(crystal)
  return Math.abs(hz - wards.seal.resonanceHz) <= wards.seal.toleranceHz
}
