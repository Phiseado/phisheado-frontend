describe("Statistics", () => {

    beforeEach(() => {
        cy.initialOpen();
    });

    it("show domain history successfully", () => {
        cy.get("a.p-menuitem-link").eq(2).click();
        cy.contains("Dominio");
        cy.contains("Frecuencia de aparición");
    })

    it("searh specific domain successfully", () => {
        cy.get("a.p-menuitem-link").eq(2).click();
        cy.get("input.p-inputtext").type("testsafebrowsing.appspot.com");
        cy.get("li.p-autocomplete-item").contains("testsafebrowsing.appspot.com").click();
        cy.contains("testsafebrowsing.appspot.com");
    })

    it("show and filter charts successfully", () => {
        cy.get("a.p-menuitem-link").eq(2).click();
        cy.contains("Ranking de países según casos de phishing detectados");
        cy.contains("Gráfico de casos detectados reales");
        cy.get("div.p-dropdown").click();
        cy.contains("Esta semana");
        cy.contains("Este mes");
        cy.contains("Hoy");
    })
})