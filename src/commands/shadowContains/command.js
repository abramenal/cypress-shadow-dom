import { validateElement, validateSubject } from '../../validators';

export default function shadowContains(subject, content) {
  validateSubject(subject);

  /**
   * shadowContains should both work with shadow'ish and regular DOM elements
   */
  const baseElement = subject[0].shadowRoot || subject[0];

  /**
   * shadowContains should also check subject's text content
   */
  const rawElementsList = [baseElement, ...baseElement.querySelectorAll('*')];

  const element = [].find.call(rawElementsList, rawEl => RegExp(content, 'i').test(rawEl.innerText));

  validateElement(element);

  Cypress.log({
    name: 'shadowContains',
  });

  return Cypress.cy.wrap(element, { log: false });
}
