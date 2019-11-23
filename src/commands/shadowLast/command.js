import { validateOptions, validateSubject } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowLast(subject, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => subject[subject.length - 1];

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowLast',
      consoleProps: () => ({ element }),
    });

    return element;
  });
}
