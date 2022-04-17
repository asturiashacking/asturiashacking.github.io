describe("Smoke", () => {
  describe("Home", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("has a contact email", () => {
      cy.get("body").should("contain", "asturiashacking[at]gmail.com");
    });

    it("has the right links to social media", () => {
      cy.get('a[href*="https://saraos.tech/@asturiashacking"]').should("exist");
      cy.get('a[href*="https://twitter.com/asturiashacking"]').should("exist");
    });

    it("has the ability to navigate to Dojos", () => {
      cy.get('a[href*="/dojos"]').click();

      cy.url().should("equal", "http://localhost:3000/dojos");
    });
  });

  describe("Dojos", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dojos");
    });

    it("has a contact email", () => {
      cy.get("body").should("contain", "asturiashacking[at]gmail.com");
    });

    it("has the right links to coc, terms & conditions", () => {
      cy.get(
        'a[href*="https://github.com/asturiashacking/core/blob/main/coc/CODE_OF_CONDUCT.md"]'
      ).should("exist");

      cy.get(
        'a[href*="https://github.com/asturiashacking/activities/blob/main/TERMS.md"]'
      ).should("exist");
    });

    it("has the ability to navigate back to Home", () => {
      cy.get('a[href="/"]').click();

      cy.url().should("equal", "http://localhost:3000/");
    });
  });
});
