import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readResonance } from '../src/lumen/resonance.js'
import { crystal } from './crystal.js'

test('a crystal is struck only once', () => {
  const c = crystal(432)
  readResonance(c)
  readResonance(c)
  assert.equal(c.strikes, 1)
})
