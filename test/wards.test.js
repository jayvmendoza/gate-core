import { test } from 'node:test'
import assert from 'node:assert/strict'
import { wards } from '../src/wards.js'

test('ward tolerance is tight enough to refuse a false note', () => {
  // Wider than a single hertz and the seal opens for notes that are not the true one.
  assert.ok(wards.seal.toleranceHz > 0 && wards.seal.toleranceHz < 1)
})
