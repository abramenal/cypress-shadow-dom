import { validateElement, validateSubject } from '../../validators';

export default function shadowFirst(subject) {
  validateSubject(subject);

  const element = subject[0];
  validateElement(element);

  Cypress.log({
    name: 'shadowFirst',
  });

  return Cypress.cy.wrap(element, { log: false });
}
