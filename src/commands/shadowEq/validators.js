import { ERR_TYPES, InternalError } from '../../error';

export const validateIndex = index => {
  if (typeof index !== 'number') {
    throw new InternalError(ERR_TYPES.INVALID_INDEX);
  }
};
