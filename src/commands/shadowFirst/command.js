import { validateOptions, validateSubject } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowFirst(subject, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => subject[0];

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowFirst',
      consoleProps: () => ({ element }),
    });

    return element;
  });
}
