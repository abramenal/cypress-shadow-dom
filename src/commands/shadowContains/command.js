import { validateOptions, validateSubject, validateText } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowContains(subject, content, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateText(content);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const selector = `:contains(${content})`;

  const elGetter = () => {
    const found = Cypress.$(selector, subject);

    if (found.length) {
      return found;
    }

    return Array.from(subject).reduce((result, sub) => {
      if (sub.shadowRoot) {
        return result.add(selector, sub.shadowRoot);
      }
      return result;
    }, Cypress.$([]));
  };

  return resolveValue(elGetter, options).then(element => {
    Cypress.log({
      name: 'shadowContains',
      message: `'${content}'`,
      consoleProps: () => ({ content, element }),
    });

    return element;
  });
}
