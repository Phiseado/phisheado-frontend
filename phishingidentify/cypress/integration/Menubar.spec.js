describe("Headerbar", () => {

    beforeEach(() => {
        cy.initialOpen();
    })

    it("successful menu navigation", () => {
        cy.get("div.p-overlay").first().click({ force: true })
        cy.contains("Analiza tu mensaje");
        cy.get("a.p-menuitem-link").first().click();
        cy.get("div.p-overlay").eq(1).click({ force: true })
        cy.contains("URL's consideradas como phishing")
        cy.get("a.p-menuitem-link").first().click();
        cy.get("div.p-overlay").last().click({ force: true })
        cy.contains("Nuestro objetivo")
    })
})