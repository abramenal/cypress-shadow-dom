import { ERR_TYPES, InternalError } from '../error';

export default selector => {
  if (!selector || typeof selector !== 'string' || selector.length < 1) {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR);
  }
};
