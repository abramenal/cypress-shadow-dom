/// <reference types="cypress" />

declare namespace Cypress {
  type ShadowCommandOptions = {
    timeout?: Number;
  };

  type ShadowEventOptios = {
    force?: Boolean;
    bubbles?: Boolean;
    cancelable?: Boolean;
    composed?: Boolean;
  };

  type ShadowInputTypingOptions = {
    delay?: Number;
  };

  interface Chainable<Subject> {
    shadowClick(options?: ShadowEventOptios): Chainable<Subject>;
    shadowContains(content: string, options?: ShadowCommandOptions): Chainable<Subject>;
    shadowEq(index: number, options?: ShadowCommandOptions): Chainable<Subject>;
    shadowFind(selector: string, options?: CommandOptions): Chainable<Subject>;
    shadowFirst(options?: CommandOptions): Chainable<Subject>;
    shadowGet(selector: string, options?: CommandOptions): Chainable<Subject>;
    shadowLast(options?: CommandOptions): Chainable<Subject>;
    shadowTrigger(eventName: string, options?: ShadowEventOptios): Chainable<Subject>;
    shadowType(content: string, options?: ShadowInputTypingOptions): Chainable<Subject>;
  }
}
