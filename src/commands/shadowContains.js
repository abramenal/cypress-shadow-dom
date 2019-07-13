import { InternalError, ERR_TYPES } from '../error';

export default function shadowContains(subject, content) {
  /**
   * shadowContains should both work with shadow'ish and regular DOM elements
   */
  const baseElement = subject[0].shadowRoot || subject[0];
  const rawElementsList = baseElement.querySelectorAll('*');
  const rawElementContainingText = [].find.call(rawElementsList, rawEl => RegExp(content, 'i').test(rawEl.innerText));

  if (!rawElementContainingText) {
    throw new InternalError(ERR_TYPES.ELEMENT_NOT_FOUND);
  }

  Cypress.log({
    name: 'shadowContains',
    message: `'${content}'`,
    consoleProps: () => ({
      content,
    }),
  });

  return Cypress.cy.wrap(rawElementContainingText, { log: false });
}
