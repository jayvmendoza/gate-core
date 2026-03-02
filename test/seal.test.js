import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sealShouldOpen } from '../src/seal/threshold.js'
import { crystal } from './crystal.js'

test('seal opens for the true note', () => {
  assert.equal(sealShouldOpen(crystal(432.1)), true)
})

test('seal stays shut for a false note', () => {
  assert.equal(sealShouldOpen(crystal(440)), false)
})
