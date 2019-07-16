import { ERR_TYPES, InternalError } from '../../error';

export const validateIndex = (index, collectionLength) => {
  if (typeof index !== 'number' || Math.abs(index) >= collectionLength) {
    throw new InternalError(ERR_TYPES.INVALID_INDEX);
  }
};
