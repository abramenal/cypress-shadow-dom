import { InternalError, ERR_TYPES } from '../error';

export default function shadowGet(rootSubject, selector) {
  if (!selector) {
    throw new InternalError(ERR_TYPES.MISSING_SELECTOR);
  }

  const selectorPath = selector.split(' ');
  let currentElement = rootSubject;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < selectorPath.length; i++) {
    if (i > 0) {
      currentElement = currentElement.shadowRoot;
    }

    if (currentElement) {
      currentElement = currentElement.querySelector(selectorPath[i]);
    }

    if (!currentElement) {
      break;
    }
  }

  return currentElement;
}
