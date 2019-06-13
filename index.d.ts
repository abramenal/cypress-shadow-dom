declare namespace Cypress {
  interface Chainable<Subject> {
    shadowGet(selector: string): Chainable<Subject>;
    shadowFind(): throws;
    shadowShould(): throws;
    shadowEq(): throws;
    shadowClick(): throws;
    shadowSelect(): throws;
    shadowTrigger(): throws;
    shadowContains(): throws;
  }
}
