describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /*
   * https://github.com/cypress-io/snapshot
   * Add manual DOM snapshots
   */

  it('renders list correctly', () => {
    cy.document({ log: false })
      .shadowGet('todo-list todo-list-item')
      .its('length')
      .should('eq', 2);
  });

  it('displays first item title correctly', () => {
    cy.document({ log: false })
      .shadowGet('todo-list todo-list-item')
      .shadowFirst()
      .shadowContains('Read some books');

    /* Or same thing with other command */
    cy.document({ log: false })
      .shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowContains('Read some books');
  });

  it('displays last item title correctly', () => {
    cy.document({ log: false })
      .shadowGet('todo-list todo-list-item')
      .shadowLast()
      .shadowContains('Buy some serials');
  });

  it('removes list item when clicking X (remove) button', () => {
    cy.document({ log: false })
      .shadowGet('todo-list todo-list-item')
      .shadowFirst()
      .shadowFind('button.destroy')
      .shadowTrigger('click');

    cy.document({ log: false })
      .shadowGet('todo-list todo-list-item')
      .its('length')
      .should('eq', 1);
  });
});
