import { InternalError, ERR_TYPES } from '../error';

export default element => {
  if (!element) {
    throw new InternalError(ERR_TYPES.ELEMENT_NOT_FOUND);
  }
};
