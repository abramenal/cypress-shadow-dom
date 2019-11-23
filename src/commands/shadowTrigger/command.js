import { validateOptions, validateSubject } from '../../validators';
import { validateEventName } from './validators';
import { DEFAULT_EVENT_OPTIONS } from '../../constants';

export default function shadowTrigger(subject, eventName, options = {}) {
  Cypress._.defaults(options, DEFAULT_EVENT_OPTIONS);
  validateSubject(subject);
  validateEventName(eventName);
  validateOptions(options, DEFAULT_EVENT_OPTIONS);

  Cypress.log({
    name: 'shadowTrigger',
    message: eventName,
    consoleProps: () => ({
      eventName,
    }),
  });

  const event = new CustomEvent(eventName, options);
  subject[0].dispatchEvent(event);

  return subject;
}
