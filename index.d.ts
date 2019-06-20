declare namespace Cypress {
  type EventOptions = {
    log?: Boolean;
    force?: Boolean;
    bubbles?: Boolean;
    cancelable?: Boolean;
    timeout?: Number;
    composed?: Boolean;
  };

  interface Chainable<Subject> {
    shadowClick(options?: EventOptions): Chainable<Subject>;
    shadowGet(selector: string): Chainable<Subject>;
    shadowContains(content: string): Chainable<Subject>;
    shadowTrigger(eventName: string, options?: EventOptions): Chainable<Subject>;
    shadowFind(selector: string): Chainable<Subject>;
    shadowFirst(): Chainable<Subject>;
    shadowLast(): Chainable<Subject>;

    shadowShould(): throws;
    shadowEq(): throws;
    shadowSelect(): throws;
  }
}
