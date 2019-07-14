import { validateText } from './validators';
import { DEFAULT_OPTIONS } from './constants';
import { validateOptions, validateSubject } from '../../validators';

export default (subject, text, options = {}) =>
  Cypress.cy.document({ log: false }).then(async document => {
    validateSubject(subject);
    validateText(text);
    validateOptions(options, DEFAULT_OPTIONS);

    const processingOpts = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const { delay } = processingOpts;

    Cypress.log({
      name: 'shadowType',
      message: text,
      consoleProps: () => ({
        text,
      }),
    });

    return Cypress.Promise.all(
      text.split('').map(char => {
        return new Promise(resolve => {
          const eventOpts = {
            key: char,
            code: char.charCodeAt(0),
          };

          const keyDownEvent = new KeyboardEvent('keydown', eventOpts);
          document.dispatchEvent(keyDownEvent);
          const keyPressEvent = new KeyboardEvent('keydown', eventOpts);
          document.dispatchEvent(keyPressEvent);
          const keyUpEvent = new KeyboardEvent('keyup', eventOpts);
          document.dispatchEvent(keyUpEvent);

          /* eslint-disable-next-line no-param-reassign */
          subject[0].value += char;
          const changeEvent = new Event('change', {
            bubbles: true,
            cancelable: true,
            composed: true,
          });
          subject[0].dispatchEvent(changeEvent);

          setTimeout(resolve, delay);
        });
      }),
    ).then(() => subject);
  });
