/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("requires email and password when submit form", () => {
    cy.get("[data-cy=loginButton]").click();
    cy.contains("Email is required");
    cy.contains("Password is required");
  });

  it("requires valid email and password when submit form", () => {
    cy.get("[data-cy=loginEmail]").type("test");
    cy.get("[data-cy=loginPassword]").type("pwd");
    cy.get("[data-cy=loginButton]").click();
    cy.contains("Email is invalid");
    cy.contains("Password is invalid");
  });

  it("login sucessfull with valid email and password", () => {
    cy.get("[data-cy=loginEmail]").type("test@gmail.com");
    cy.get("[data-cy=loginPassword]").type("Pwd@123");
    cy.get("[data-cy=loginButton]").click();
    cy.contains("Success Login");
  });
});
