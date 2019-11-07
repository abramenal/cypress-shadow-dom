import { validateSelector } from '../../validators';
import resolveValue from '../../helpers/resolveValue';

export default (selector, options) => {
  validateSelector(selector);

  Cypress._.defaults(options, {
    log: true,
    timeout: 10000,
  });

  const elGetter = () => {
    return Cypress.$(selector);
  };

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowGet',
      message: `'${selector}'`,
      consoleProps: () => ({ selector, element }),
    });

    return element;
  });
};
