import { readResonance } from './resonance.js'

// The lumen's small glass shows the note in kilohertz, three places.
export function glyphText(crystal) {
  return readResonance(crystal).toFixed(3)
}
