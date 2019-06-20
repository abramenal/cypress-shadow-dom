import { shadowClick, shadowContains, shadowFind, shadowFirst, shadowGet, shadowLast, shadowTrigger } from './commands';

export default () => {
  Cypress.Commands.add('shadowClick', { prevSubject: true }, shadowClick);
  Cypress.Commands.add('shadowGet', { prevSubject: 'document' }, shadowGet);
  Cypress.Commands.add('shadowContains', { prevSubject: true }, shadowContains);
  Cypress.Commands.add('shadowTrigger', { prevSubject: true }, shadowTrigger);
  Cypress.Commands.add('shadowFind', { prevSubject: true }, shadowFind);
  Cypress.Commands.add('shadowFirst', { prevSubject: true }, shadowFirst);
  Cypress.Commands.add('shadowLast', { prevSubject: true }, shadowLast);
};
