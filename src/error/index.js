import ERR_TYPES from './types';

class InternalError extends Error {
  constructor(errorType, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InternalError);
    }

    this.name = '[cypress-shadow-dom::InternalError]';
    this.message = `${errorType.message} ${errorType.tip}`;
  }
}

export { ERR_TYPES, InternalError };
