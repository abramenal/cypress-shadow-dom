import { InternalError, ERR_TYPES } from '../error';

const defaultOptions = {
  log: true,
  force: false,
  bubbles: true,
  cancelable: true,
  timeout: 4000,

  composed: true,
};

export default function shadowTrigger(subject, eventName, options = {}) {
  if (!eventName) {
    throw new InternalError(ERR_TYPES.MISSING_EVENT_NAME);
  }

  const eventOpts = {
    ...defaultOptions,
    ...options,
  };

  const event = new CustomEvent(eventName, eventOpts);

  subject[0].dispatchEvent(event);
}
