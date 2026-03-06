describe('Cadastro de Tutorial', () => {

  beforeEach(() => {
    cy.visit('/add')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer cadastro com sucesso', () => {
   cy.get(':nth-child(2) > .nav-link').click()

   cy.get('[name="title"]').type('Testando Titulo')
   cy.get(':nth-child(2) > [name="description"]').type('Testando descricao')

   cy.get('.btn').click()

   cy.get('h4').should('contain', 'You submitted successfully!')
  })
})