import { validateSelector, validateSubject } from '../../validators';
import resolveValue from '../../helpers/resolveValue';

export default function shadowFind(subject, selector, options) {
  validateSubject(subject);
  validateSelector(selector);

  const elGetter = () => {
    const currentElement = subject[0].shadowRoot || subject[0];
    const found = currentElement.querySelectorAll(selector);

    return found;
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
