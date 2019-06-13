import { shadowGet } from './commands';
import { InternalError, ERR_TYPES } from './error';

const notImplemented = () => {
  throw new InternalError(ERR_TYPES.NOT_IMPLEMENTED);
};

export default () => {
  Cypress.Commands.add('shadowGet', { prevSubject: 'document' }, shadowGet);
  Cypress.Commands.add('shadowFind', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowShould', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowEq', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowClick', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowSelect', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowTrigger', { prevSubject: 'element' }, notImplemented);
  Cypress.Commands.add('shadowContains', { prevSubject: 'element' }, notImplemented);
};
