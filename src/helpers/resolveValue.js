export default function resolveValue(valueGetterFn, options) {
  // console.log('resolve value call');
  function retryValue() {
    // console.log('retry value call');
    return Cypress.Promise.try(valueGetterFn).catch(err => {
      options.error = err;
      return Cypress.cy.retry(valueGetterFn, options);
    });
  }
  return Cypress.Promise.try(retryValue).then(value => {
    return Cypress.cy.verifyUpcomingAssertions(value, options, {
      onRetry: resolveValue,
    });
  });
}
