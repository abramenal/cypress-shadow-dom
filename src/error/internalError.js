class InternalError extends Error {
  constructor(errorType, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InternalError);
    }

    this.name = '[cypress-shadow-dom]';
    this.message = `${errorType.message}. ${errorType.tip}`;
  }
}

export default InternalError;
