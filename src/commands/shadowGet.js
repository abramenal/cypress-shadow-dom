import { InternalError, ERR_TYPES } from '../error';

export default function shadowGet(rootSubject, selector, options = { selectMultiple: true }) {
  if (!selector) {
    throw new InternalError(ERR_TYPES.MISSING_SELECTOR);
  }

  const { selectMultiple } = options;
  const selectorPath = selector.split(' ');
  let currentElement = rootSubject;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < selectorPath.length; i++) {
    if (i > 0) {
      currentElement = currentElement.shadowRoot;
    }

    if (currentElement) {
      if (selectMultiple && selectorPath.length === i + 1) {
        currentElement = currentElement.querySelectorAll(selectorPath[i]);
      } else {
        /**
         * If current selector is the last one we usually select multiple items
         * but may override this behavior by providing `selectMultiple` as false
         */
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
