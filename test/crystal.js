// A crystal for the trials: rings at a fixed note and counts how often it was struck.
export function crystal(hz) {
  let strikes = 0
  return { ring: () => (strikes++, hz), get strikes() { return strikes } }
}
