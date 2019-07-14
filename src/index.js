import {
  shadowClick,
  shadowContains,
  shadowEq,
  shadowFind,
  shadowFirst,
  shadowGet,
  shadowLast,
  shadowTrigger,
  shadowType,
} from './commands';

export default () => {
  const commandOptions = { prevSubject: true };

  Cypress.Commands.add('shadowClick', commandOptions, shadowClick);
  Cypress.Commands.add('shadowContains', commandOptions, shadowContains);
  Cypress.Commands.add('shadowEq', commandOptions, shadowEq);
  Cypress.Commands.add('shadowFind', commandOptions, shadowFind);
  Cypress.Commands.add('shadowFirst', commandOptions, shadowFirst);
  Cypress.Commands.add('shadowGet', { prevSubject: false }, shadowGet);
  Cypress.Commands.add('shadowLast', commandOptions, shadowLast);
  Cypress.Commands.add('shadowTrigger', commandOptions, shadowTrigger);
  Cypress.Commands.add('shadowType', commandOptions, shadowType);
};
