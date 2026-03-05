// Strikes the crystal and listens. Crystals ring in hertz.
// Never strike twice: see cache.js.
export function sample(crystal) {
  return crystal.ring()
}
