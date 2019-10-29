export default function resolveValue(valueGetterFn, options = {}) {
  return Cypress.Promise.try(valueGetterFn).then(value => {
    return Cypress.cy.verifyUpcomingAssertions(value, options, {
      onRetry: () => resolveValue(valueGetterFn, options),
    });
  });
}
