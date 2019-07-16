import { validateOptions, validateSubject } from '../../validators';
import { validateEventName } from './validators';
import { DEFAULT_OPTIONS } from './constants';

export default function shadowTrigger(subject, eventName, options = {}) {
  validateSubject(subject);
  validateEventName(eventName);
  validateOptions(options, DEFAULT_OPTIONS);

  const eventOpts = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  Cypress.log({
    name: 'shadowTrigger',
    message: eventName,
    consoleProps: () => ({
      eventName,
    }),
  });

  const event = new CustomEvent(eventName, eventOpts);
  subject[0].dispatchEvent(event);

  return subject;
}
