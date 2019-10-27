import { validateElement, validateSelector, validateSubject } from '../../validators';
import resolveValue from '../../helpers/resolveValue';

export default function shadowFind(subject, selector, options) {
  validateSubject(subject);
  validateSelector(selector);

  const elGetter = () => {
    const currentElement = subject[0].shadowRoot || subject[0];
    return currentElement.querySelectorAll(selector);
  };

  return resolveValue(elGetter, options).then(foundElements => {
    // validateElement(foundElements[0]);

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
