import { ERR_TYPES, InternalError } from '../error';

export default (number, [min, max]) => {
  if (typeof number !== 'number' || number < min || number > max) {
    throw new InternalError(ERR_TYPES.INVALID_INDEX_NUMBER);
  }
};
