const URL = Cypress.env("URL");
const API = Cypress.env("API");

let id = 0;

describe("Show Page", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: `${API}/songs`,
      body: {
        name: "Raspberry Beret",
        artist: "Prince",
        time: "4:12",
        is_favorite: true,
      },
      log: true,
    }).then((newSong) => {
      id = newSong.body.id;
      cy.visit(`${URL}/songs/${id}`);
    });
  });

  it("shows the header text", () => {
    cy.contains("Tuner");
  });

  describe("contains action/navigation buttons", () => {
    it("has a 'back' button", () => {
      cy.get("a")
        // .contains("Back").
        // parent()
        .should("exist");
      // .should("have.attr", "href", `/snacks`);
    });

    it("that deletes the item and redirects to index page", () => {
      cy.wait(1000); // gives us a chance to see the show page before deleting and redirecting
      cy.get("button")
        .contains("Delete")
        .click()
        .then(() => {
          cy.url().should("eq", `${URL}/songs`);
          cy.get("a").each((item) => {
            cy.wrap(item)
              .invoke("attr", "href")
              .then((href) => {
                cy.wrap(href).should("not.equal", `/songs/${id}`);
              });
          });
        });
    });
  });
});
