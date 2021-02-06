/// <reference types="cypress" />

describe('Demo site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'EleventyOne').should('be.visible')
  })
})
