import { validateElement, validateSelector, validateSubject } from '../../validators';

export default function shadowFind(subject, selector) {
  validateSubject(subject);
  validateSelector(selector);

  const currentElement = subject[0].shadowRoot || subject[0];
  const foundElements = currentElement.querySelectorAll(selector);
  validateElement(foundElements[0]);

  Cypress.log({
    name: 'shadowFind',
    message: `'${selector}'`,
    consoleProps: () => ({
      selector,
    }),
  });

  return Cypress.cy.wrap(foundElements, { log: false });
}
