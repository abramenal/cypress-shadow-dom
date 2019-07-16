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
    shadowContains(content: string): Chainable<Subject>;
    shadowEq(index: number): Chainable<Subject>;
    shadowFind(selector: string): Chainable<Subject>;
    shadowFirst(): Chainable<Subject>;
    shadowGet(selector: string): Chainable<Subject>;
    shadowLast(): Chainable<Subject>;
    shadowTrigger(eventName: string, eventOptions?: EventOptions): Chainable<Subject>;
    shadowType(content: string): Chainable<Subject>;
  }
}
