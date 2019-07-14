import { validateIndex } from './validators';
import { validateElement, validateSubject } from '../../validators';

export default function shadowEq(subject, index) {
  validateSubject(subject);
  validateIndex(index);

  const element = subject[index < 0 ? subject.length - index : index];
  validateElement(element);

  Cypress.log({
    name: 'shadowEq',
    message: `':nth-child(${index})'`,
    consoleProps: () => ({
      index,
    }),
  });

  return Cypress.cy.wrap(element, { log: false });
}
