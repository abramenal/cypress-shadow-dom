/// <reference types="cypress" />

declare namespace Cypress {
  type EventOptions = {
    log?: Boolean;
    force?: Boolean;
    bubbles?: Boolean;
    cancelable?: Boolean;
    timeout?: Number;
    composed?: Boolean;
  };

  type CommandOptions = {
    timeout?: Number;
  };

  interface Chainable<Subject> {
    shadowClick(options?: EventOptions): Chainable<Subject>;
    shadowContains(content: string): Chainable<Subject>;
    shadowEq(index: number): Chainable<Subject>;
    shadowFind(selector: string, options?: CommandOptions): Chainable<Subject>;
    shadowFirst(): Chainable<Subject>;
    shadowGet(selector: string, options?: CommandOptions): Chainable<Subject>;
    shadowLast(): Chainable<Subject>;
    shadowTrigger(eventName: string, eventOptions?: EventOptions): Chainable<Subject>;
    shadowType(content: string): Chainable<Subject>;
  }
}
