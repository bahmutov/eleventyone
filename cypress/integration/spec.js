/// <reference types="cypress" />

describe('Demo site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'Netlify Cypress Tests').should('be.visible')
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

  it('navigates directly', () => {
    cy.visit('/about')
    cy.contains('h1', 'About').should('be.visible')
  })

  it('navigates via links', () => {
    cy.visit('/')
    cy.get('.nav li').should('have.length.gt', 1)
      .contains('a', 'about')
      .should('have.attr', 'href', '/about').click()
    cy.location('pathname').should('include', '/about')
    cy.contains('h1', 'About').should('be.visible')

    cy.get('.nav li').should('have.length.gt', 1)
      .contains('a', 'home')
      .should('have.attr', 'href', '/').click()
    cy.contains('h1', 'Netlify Cypress Tests').should('be.visible')
  })
})
