import { test } from 'node:test'
import assert from 'node:assert/strict'
import { glyphText } from '../src/lumen/glyph.js'
import { crystal } from './crystal.js'

test('the small glass reads in kilohertz', () => {
  assert.equal(glyphText(crystal(432)), '0.432')
})
