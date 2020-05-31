import { validateOptions, validateSelector, validateSubject } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowFind(subject, selector, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateSelector(selector);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => {
    const found = Cypress.$(selector, subject);

    if (found.length) {
      return found;
    }

    return Array.from(subject).reduce((result, sub) => {
      if (sub.shadowRoot) {
        const childEl = [].map.call(sub.shadowRoot.children, el => Cypress.$(el)).find(el => el.is(selector));

        if (childEl && childEl.length) {
          return result.add(childEl);
        }

        const f = Cypress.$(sub.shadowRoot.children).find(selector);

        return result.add(f);
      }
      return result;
    }, Cypress.$([]));
  };

  return resolveValue(elGetter, options).then(foundElements => {
    Cypress.log({
      name: 'shadowFind',
      message: `'${selector}'`,
      consoleProps: () => ({
        selector,
        foundElements,
      }),
    });

    return foundElements;
  });
}
