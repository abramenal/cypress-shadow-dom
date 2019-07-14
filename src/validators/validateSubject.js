import { InternalError, ERR_TYPES } from '../error';

export default subject => {
  if (!subject) {
    throw new InternalError(ERR_TYPES.INVALID_SUBJECT);
  }
};
