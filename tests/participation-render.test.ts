import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ThemeProvider } from '../src/context/ThemeContext';
import { ParticipationPage } from '../src/components/ParticipationPage';

function render(search: string) {
  return renderToStaticMarkup(createElement(ThemeProvider, { children: createElement(ParticipationPage, {
    search, onNavigateHome() {}, onOpenTeamFinder() {},
  }) }));
}

test('program guidance renders links to the chosen program and no registration form', () => {
  for (const code of ['FLL', 'FTC', 'FRC']) {
    const html = render(`?programa=${code}`);
    assert.ok(html.includes(`Como participar da ${code}`));
    assert.ok(html.includes(`href="/program/${code.toLowerCase()}"`));
    assert.doesNotMatch(html, /<form|Registrar interesse|formulário/i);
  }
});

test('audience guidance highlights the selected profile and offers a return to all paths', () => {
  const html = render('?perfil=ESCOLA');
  assert.match(html, /Orientações: Escola/);
  assert.match(html, /Ver todas as orientações/);
  assert.doesNotMatch(html, /<h3[^>]*>Mentor/);
  assert.match(render(''), /Ver orientações para mentor/);
});
