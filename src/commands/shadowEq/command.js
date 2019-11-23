import { validateNumberInRange, validateOptions, validateSubject } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowEq(subject, index, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateNumberInRange(index, [-subject.length, +subject.length]);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => subject[index < 0 ? subject.length + index : index];

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowEq',
      message: `':nth-child(${index})'`,
      consoleProps: () => ({
        index,
        element,
      }),
    });

    return element;
  });
}
