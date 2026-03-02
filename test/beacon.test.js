import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pulseIntervalMs } from '../src/beacon/pulse.js'
import { crystal } from './crystal.js'

test('beacon pulses at the true note', () => {
  assert.ok(Math.abs(pulseIntervalMs(crystal(432)) - 2314.81) < 0.01)
})
