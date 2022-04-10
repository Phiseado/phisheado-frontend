describe("Headerbar", () => {

    beforeEach(() => {
        cy.initialOpen();
    })

    it("successful menu navigation", () => {
        cy.get("div.p-overlay").first().click({ force: true })
        cy.contains("Analiza tu mensaje");
        cy.get("i.pi.pi-home").click();
        cy.get("div.p-overlay").eq(1).click({ force: true })
        cy.contains("URL's consideradas como phishing");
        cy.get("i.pi.pi-home").click();
        cy.get("div.p-overlay").eq(2).click({ force: true })
        // check third element
        cy.get("i.pi.pi-home").click();
        cy.get("div.p-overlay").last().click({ force: true })
        // check last element
    })

    it("the menubar is opened successfull", () => {
        cy.get("button.sidenav---sidenav-toggle---1KRjR").click();
        cy.contains("Inicio")
        cy.contains("Analizar")
        cy.contains("Estadísticas")
        cy.contains("Información")
        cy.contains("Contáctanos")
    })
})