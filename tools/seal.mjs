// npm run seal: checks the gate is mended the right way, then gives its seal code.
import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'

const GUARDED = 'd5123547fecf4db563b7a34eb6091f815bce3897' // the record as it stood when the gate fell
const sh = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const fail = (why) => { console.error('\nThe seal holds. ' + why + '\n'); process.exit(1) }

try { execSync('node --test', { stdio: 'pipe' }) } catch { fail('Trials still fail: run npm test and read what breaks.') }
try { sh('git merge-base --is-ancestor ' + GUARDED + ' HEAD') } catch {
  fail('History was rewritten: your branch no longer holds commits the gate remembers. Mend with new commits; never reset a shared branch or force-push.')
}
const undone = [...sh('git log --format=%B ' + GUARDED + '..HEAD').matchAll(/This reverts commit ([0-9a-f]{40})/g)].map((m) => m[1])
if (!undone.length) fail('No revert recorded. Undo the guilty change with git revert, so the record shows what was undone and why.')
console.log('\nThe seal answers. Marks of what you undid:')
for (const sha of undone) {
  const code = createHash('sha256').update('orvion-seal:' + sha).digest('hex').slice(0, 12).toUpperCase()
  console.log('  ' + sha.slice(0, 7) + '  ' + code.match(/.{4}/g).join('-'))
}
console.log('\nEnter the mark of the guilty change at the Keeper\'s console.\n')
