import { InternalError, ERR_TYPES } from '../error';

export default function shadowGet(rootSubject, selector) {
  if (!selector) {
    throw new InternalError(ERR_TYPES.MISSING_SELECTOR);
  }

  const selectorPath = selector.split(' ');
  let currentElement = rootSubject;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < selectorPath.length; i++) {
    if (i > 0) {
      currentElement = currentElement.shadowRoot;
    }

    if (currentElement) {
      if (selectorPath.length === i + 1) {
        // it's the last invocation, so should be qsAll
        currentElement = currentElement.querySelectorAll(selectorPath[i]);
      } else {
        currentElement = currentElement.querySelector(selectorPath[i]);
      }
    }

    if (!currentElement) {
      break;
    }
  }

  Cypress.log({
    name: 'shadowGet',
    message: `'${selector}'`,
    consoleProps: () => ({
      selector,
    }),
  });

  return Cypress.cy.wrap(currentElement, { log: false });
}
