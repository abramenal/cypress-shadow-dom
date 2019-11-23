import { validateOptions, validateSelector } from '../../validators';
import resolveValue from '../../helpers/resolveValue';

import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default (selector, options = {}) => {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSelector(selector);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => Cypress.$(selector);

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowGet',
      message: `'${selector}'`,
      consoleProps: () => ({ selector, element }),
    });

    return element;
  });
};
