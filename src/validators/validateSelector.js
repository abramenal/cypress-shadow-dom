import { ERR_TYPES, InternalError } from '../error';

export default selector => {
  if (!selector || typeof selector !== 'string') {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR);
  }

  /*
   * Matches any spaces not inside ""
   * e.g. `input[placeholder="First A Name"]` will not be matched
   * however `div input[placeholder="Text"]` will find the whitespace
   */
  const illegalSpaceBeforeRegex = /(?<!".+)(\s)/g;
  const illegalSpaceAfterRegex = /(\s)(?!.+")/g;

  if (!!selector.match(illegalSpaceBeforeRegex) || !!selector.match(illegalSpaceAfterRegex)) {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR_NO_MULTI);
  }

  if (selector.indexOf('@') !== -1) {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR_NO_ALIAS);
  }
};
