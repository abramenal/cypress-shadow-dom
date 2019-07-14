import { ERR_TYPES, InternalError } from '../error';

export default (options, defaults) => {
  if (!options || typeof options !== 'object') {
    throw new InternalError(ERR_TYPES.INVALID_OPTIONS);
  }

  Object.keys(options).forEach(optKey => {
    if (!(optKey in defaults)) {
      throw new InternalError(ERR_TYPES.INVALID_OPTIONS);
    }
  });
};
