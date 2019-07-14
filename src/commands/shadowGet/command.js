import { validateElement, validateSelector } from '../../validators';

export default selector => {
  validateSelector(selector);

  const element = Cypress.$(selector);
  validateElement(element);

  Cypress.log({
    name: 'shadowGet',
    message: `'${selector}'`,
    consoleProps: () => ({ selector }),
  });

  return element;
};
