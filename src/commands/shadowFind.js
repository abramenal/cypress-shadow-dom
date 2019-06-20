import { InternalError, ERR_TYPES } from '../error';

export default function shadowFind(rootSubject, selector) {
  if (!selector) {
    throw new InternalError(ERR_TYPES.MISSING_SELECTOR);
  }

  const selectorPath = selector.split(' ');
  let currentElement = rootSubject[0];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < selectorPath.length; i++) {
    currentElement = currentElement.shadowRoot || currentElement;
    currentElement = currentElement.querySelector(selectorPath[i]);

    if (!currentElement) {
      break;
    }
  }

  Cypress.log({
    name: 'shadowFind',
    message: `'${selector}'`,
    consoleProps: () => ({
      selector,
    }),
  });

  return Cypress.cy.wrap(currentElement, { log: false });
}
