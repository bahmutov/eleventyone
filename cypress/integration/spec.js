/// <reference types="cypress" />

describe('Demo site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'EleventyOne').should('be.visible')
  })

  it('delivers jokes', () => {
    cy.visit('/')
    cy.request('/api/fetch-joke')
      .its('body')
      .then(JSON.parse)
      .its('msg')
      .should('be.a', 'string')
      .and('be.not.empty')
  })
})
