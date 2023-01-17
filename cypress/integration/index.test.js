// From cypress.json env
const URL = Cypress.env("URL");
// Already set to true as default on circleci
// importing this value through plugins/index.js
const CI_ENV = Cypress.env("ci");

describe("Index page", () => {
  before(() => {
    cy.visit(`${URL}/songs`);
  });

  it("Has a link to each song's show page", () => {
    const regex = /songs\/(\d+)/;
    cy.get(".Song a").each(($item) => {
      cy.wrap($item).invoke("attr", "href").should("match", regex);
    });
  });

  it("Has the correct properties displayed", () => {
    cy.get(".Song td").contains("Fame");
    cy.get(".Songs td").contains("David Bowie");
    cy.get(".Songs td").contains("4:12");
    cy.get(".Songs td").contains("⭐️");
  });

  it("Can load index page and has navigation to New page", () => {
    cy.get("a").contains("New Song").should("have.attr", "href", `/songs/new`);
  });
});

// CSS testing
// https://www.codegrepper.com/code-examples/css/cypress+element+css
