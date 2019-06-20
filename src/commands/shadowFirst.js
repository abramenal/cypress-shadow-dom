import { InternalError, ERR_TYPES } from '../error';

export default function shadowFirst(subject) {
  const rawElement = subject[0];

  if (!rawElement) {
    throw new InternalError(ERR_TYPES.ELEMENT_NOT_FOUND);
  }

  Cypress.log({
    name: 'shadowFirst',
  });

  return Cypress.cy.wrap(rawElement, { log: false });
}
