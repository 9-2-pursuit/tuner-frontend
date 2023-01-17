const URL = Cypress.env("URL");
const API = Cypress.env("API");

let id = 0;

describe("The New page", () => {
  before(() => {
    cy.visit(`${URL}/songs/new`);
  });

  describe("the form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for the form inputs we use label/input
      // in this first one its called 'name'
      cy.get("label").contains("Song Name").should("have.attr", "for", "name");
      cy.get("#name").should("have.attr", "type", "text");
      cy.get("#name").should("have.attr", "required");

      cy.get("label").contains("Artist").should("have.attr", "for", "artist");
      cy.get("#artist").should("have.attr", "type", "text");
      cy.get("#artist").should("have.attr", "required");

      cy.get("label").contains("Album").should("have.attr", "for", "album");
      cy.get("#album").should("have.attr", "type", "text");

      cy.get("label").contains("Time").should("have.attr", "for", "time");
      cy.get("#time").should("have.attr", "type", "text");

      cy.get("label")
        .contains("Favorite")
        .should("have.attr", "for", "is_favorite");
      cy.get("#is_favorite").should("have.attr", "type", "checkbox");
    });
    it("can create a snack and then redirects back to index page", () => {
      cy.get("#name").type("50 Foot Queenie");
      cy.get("#artist").type("PJ Harvey");
      cy.get("#album").type("Rid of Me");
      cy.get("#time").type("3:13");
      cy.get("#is_favorite").check();
      cy.get("form").submit();
      cy.url().should("eq", "http://localhost:3000/songs");
      cy.visit("http://localhost:3000/songs");
      cy.contains("PJ Harvey");
    });
  });
});
