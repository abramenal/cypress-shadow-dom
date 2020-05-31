import { ERR_TYPES, InternalError } from '../error';

export default text => {
  if (!text || typeof text !== 'string' || text.length < 1) {
    throw new InternalError(ERR_TYPES.INVALID_TEXT_CONTENT);
  }
};
