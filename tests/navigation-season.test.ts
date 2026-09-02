import { test } from 'node:test';
import assert from 'node:assert/strict';
import { participationUrl, participationContext } from '../src/data/participation';
import { milestoneStatus, formatSeasonDate } from '../src/data/season';

test('program and audience survive shareable navigation URLs', () => {
  for (const program of ['FLL', 'FTC', 'FRC']) {
    const url = new URL(participationUrl(program), 'https://example.com');
    assert.equal(url.pathname, '/participar');
    assert.equal(participationContext(url.search).program, program);
  }
  for (const profile of ['ESTUDANTE', 'ESCOLA', 'MENTOR', 'EMPRESA']) {
    const url = new URL(participationUrl(profile), 'https://example.com');
    assert.equal(participationContext(url.search).profile, profile);
  }
});

test('invalid and missing participation choices use general guidance', () => {
  assert.equal(participationUrl(), '/participar');
  assert.equal(participationUrl({ type: 'click' } as unknown as string), '/participar');
  assert.equal(participationUrl('invalid'), '/participar');
  assert.deepEqual(participationContext('?perfil=unknown&programa=unknown'), { profile: null, program: null });
  assert.equal(participationContext('?programa=ftc').program, 'FTC');
});

test('milestone status follows the calendar in Brasilia, including midnight boundaries', () => {
  assert.equal(milestoneStatus('2026-09-12', new Date('2026-09-12T02:59:00Z')), 'Previsto');
  assert.equal(milestoneStatus('2026-09-12', new Date('2026-09-12T03:00:00Z')), 'Previsto para hoje');
  assert.equal(milestoneStatus('2026-09-12', new Date('2026-09-13T03:00:00Z')), 'Data prevista já passou');
  assert.match(formatSeasonDate('2027-01-09'), /9.*2027/);
});
