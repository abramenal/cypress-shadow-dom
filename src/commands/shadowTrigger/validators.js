import { InternalError, ERR_TYPES } from '../../error';

export const validateEventName = eventName => {
  if (!eventName || typeof eventName !== 'string') {
    throw new InternalError(ERR_TYPES.INVALID_EVENT_NAME);
  }
};
