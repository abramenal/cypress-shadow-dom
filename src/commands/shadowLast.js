import { InternalError, ERR_TYPES } from '../error';

export default function shadowLast(subject) {
  const rawElement = subject[subject.length - 1];

  if (!rawElement) {
    throw new InternalError(ERR_TYPES.ELEMENT_NOT_FOUND);
  }

  Cypress.log({
    name: 'shadowLast',
  });

  return Cypress.cy.wrap(rawElement, { log: false });
}
