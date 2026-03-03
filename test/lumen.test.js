import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readResonance } from '../src/lumen/resonance.js'
import { crystal } from './crystal.js'

test('lumen reads the true note', () => {
  assert.equal(readResonance(crystal(432)), 432)
})
