import { sample } from './sample.js'

const readings = new WeakMap()

// One strike per crystal: the note rings for a long while.
// Readings are raw; the pipeline in resonance.js shapes them.
export function sampleCached(crystal) {
  if (!readings.has(crystal)) readings.set(crystal, sample(crystal))
  return readings.get(crystal)
}
