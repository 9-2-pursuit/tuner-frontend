const URL = Cypress.env("URL");
const API = Cypress.env("API");

describe("Show Page", () => {
  before(() => {
    cy.visit(`${URL}/songs/${1}`);
  });

  it("shows the header text", () => {
    // cy.contains("Tuner");
  });
  it("Has the correct properties displayed", () => {
    cy.get(".Song-Details").contains("Fame");
    cy.get(".Song-Details").contains("David Bowie");
    cy.get(".Song-Details").contains("4:12");
    cy.get(".Song-Details").contains("⭐️");
  });

  describe("contains action/navigation buttons", () => {
    it("has a 'back' button", () => {
      cy.get("a")
        // .contains("Back").
        // parent()
        .should("exist");
      // .should("have.attr", "href", `/snacks`);
    });
  });
});
