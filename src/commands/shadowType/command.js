import { validateOptions, validateSubject, validateText } from '../../validators';
import { DEFAULT_INPUT_TYPING_OPTIONS } from '../../constants';

export default (subject, text, options = {}) => {
  Cypress._.defaults(options, DEFAULT_INPUT_TYPING_OPTIONS);
  validateSubject(subject);
  validateText(text);
  validateOptions(options, DEFAULT_INPUT_TYPING_OPTIONS);

  const { delay } = options;

  return Cypress.cy.document({ log: false }).then(async document => {
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
          const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true,
            composed: true,
          });
          subject[0].dispatchEvent(inputEvent);

          setTimeout(resolve, delay);
        });
      }),
    )
      .then(
        () =>
          new Promise(resolve => {
            const changeEvent = new Event('change', {
              bubbles: true,
              cancelable: true,
              composed: true,
            });
            subject[0].dispatchEvent(changeEvent);

            setTimeout(resolve, delay);
          }),
      )
      .then(() => subject);
  });
};
