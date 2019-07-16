export const ERR_TYPES = {
  INVALID_SUBJECT: {
    message: '"subject" element is not valid',
    tip: 'It should be a valid DOM (or shadow DOM) element',
  },
  INVALID_EVENT_NAME: {
    message: '"eventName" is not valid',
    tip: 'Please look into docs to find supported "eventName" values',
  },
  INVALID_OPTIONS: {
    message: '"options" are not valid',
    tip: 'Please look into docs to find supported "options" values',
  },
  INVALID_SELECTOR: {
    message: 'Selector is not valid',
    tip: 'You should provide a non-empty selector string',
  },
  INVALID_SELECTOR_NO_MULTI: {
    message: 'Selector must be single',
    tip: 'In case if you need multiple please chain it with .shadowFind() command',
  },
  INVALID_SELECTOR_NO_ALIAS: {
    message: 'Selecting by alias is not supported',
    tip: 'You must use only string-based selectors',
  },
  INVALID_INDEX: {
    message: 'Index is not valid',
    tip: 'It should be a positive or negative number within a range of the items collection',
  },
  INVALID_TEXT: {
    message: 'Text is not valid',
    tip: 'Text is a string containing at least one symbol',
  },
  ELEMENT_NOT_FOUND: {
    message: 'Error: element not found',
    tip: 'Check provided lookup conditions',
  },
};

export class InternalError extends Error {
  constructor(errorType, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InternalError);
    }

    this.name = '[cypress-shadow-dom error]';
    this.message = `${errorType.message}.\n${errorType.tip}`;
  }
}
