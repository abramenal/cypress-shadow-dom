describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders list correctly', () => {
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .its('length')
      .should('eq', 2);
  });

  it('displays first item title correctly', () => {
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowFirst()
      .shadowContains('Read some books');

    /* Or, same thing via */
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowEq(0)
      .shadowContains('Read some books');
  });

  it('displays last item title correctly', () => {
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowLast()
      .shadowContains('Buy some serials');

    /* Or, same thing via */
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowEq(-1)
      .shadowContains('Buy some serials');
  });

  it('removes list item when clicking X (remove) button', () => {
    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .shadowFirst()
      .shadowFind('button.destroy')
      .shadowTrigger('click');

    cy.shadowGet('todo-list')
      .shadowFind('todo-list-item')
      .its('length')
      .should('eq', 1);
  });

  it('displays correct search query value', () => {
    const QUERY = 'books';

    cy.shadowGet('todo-list')
      .shadowFind('todo-form')
      .shadowFind('input')
      .shadowType(QUERY)
      .then(([$el]) => {
        expect($el.value).to.equal(QUERY);
      });
  });

  it('finds asynchronously added shadow DOM element', () => {
    cy.shadowGet('todo-list-item', { timeout: 6000 })
      .shadowFind('label')
      .shadowContains('async item');
  });
});
