import { ERR_TYPES, InternalError } from '../../error';

export const validateText = text => {
  if (!text && typeof text !== 'string') {
    throw new InternalError(ERR_TYPES.INVALID_TEXT);
  }
};
