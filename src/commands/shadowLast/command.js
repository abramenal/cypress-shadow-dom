import { validateElement, validateSubject } from '../../validators';

export default function shadowLast(subject) {
  validateSubject(subject);

  const element = subject[subject.length - 1];
  validateElement(element);

  Cypress.log({
    name: 'shadowLast',
  });

  return Cypress.cy.wrap(element, { log: false });
}
