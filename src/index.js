import { shadowClick, shadowContains, shadowFind, shadowFirst, shadowGet, shadowLast, shadowTrigger } from './commands';
import { InternalError, ERR_TYPES } from './error';

const notImplemented = () => {
  throw new InternalError(ERR_TYPES.NOT_IMPLEMENTED);
};

export default () => {
  Cypress.Commands.add('shadowClick', { prevSubject: true }, shadowClick);
  Cypress.Commands.add('shadowGet', { prevSubject: 'document' }, shadowGet);
  Cypress.Commands.add('shadowContains', { prevSubject: true }, shadowContains);
  Cypress.Commands.add('shadowTrigger', { prevSubject: true }, shadowTrigger);
  Cypress.Commands.add('shadowFind', { prevSubject: true }, shadowFind);

  Cypress.Commands.add('shadowFirst', { prevSubject: true }, shadowFirst);
  Cypress.Commands.add('shadowLast', { prevSubject: true }, shadowLast);

  Cypress.Commands.add('shadowShould', { prevSubject: true }, notImplemented);
  Cypress.Commands.add('shadowEq', { prevSubject: true }, notImplemented);
  Cypress.Commands.add('shadowSelect', { prevSubject: true }, notImplemented);
};
