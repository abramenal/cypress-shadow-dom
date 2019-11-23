import { validateOptions, validateSubject, validateText } from '../../validators';
import { resolveValue } from '../../helpers';
import { DEFAULT_COMMAND_OPTIONS } from '../../constants';

export default function shadowContains(subject, content, options = {}) {
  Cypress._.defaults(options, DEFAULT_COMMAND_OPTIONS);
  validateSubject(subject);
  validateText(content);
  validateOptions(options, DEFAULT_COMMAND_OPTIONS);

  const elGetter = () => {
    /**
     * shadowContains should both work with shadow'ish and regular DOM elements
     */
    const baseElement = subject[0].shadowRoot || subject[0];

    /**
     * shadowContains should also check subject's text content
     */
    const rawElementsList = [baseElement, ...baseElement.querySelectorAll('*')];

    return rawElementsList.find(rawEl => rawEl && RegExp(content, 'i').test(rawEl.innerText));
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
