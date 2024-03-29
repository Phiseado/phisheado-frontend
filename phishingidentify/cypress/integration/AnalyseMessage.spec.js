describe("AnalyseMessage", () => {

    beforeEach(() => {
        cy.initialOpen();
    });

    it("analyse normal message", () => {
        cy.get("a.p-menuitem-link").eq(1).click();
        cy.get("textarea.p-inputtextarea").type(
            "https://google.com"
        );
        cy.get("button").last().click();
        cy.get("div.p-dropdown-trigger").click();
        cy.contains("Algeria").click();
        cy.contains("Aceptar").click();
        cy.wait(6000);
        cy.get("div.p-panel-content").contains(
            "El mensaje no es considerado como phishing"
        );
        cy.get("button").last().click();
    })

    it("analyse phishing message", () => {
        cy.get("a.p-menuitem-link").eq(1).click();
        cy.get("textarea.p-inputtextarea").type(
            "Se ha iniciado sesion desde un nuevo DlSPOSlTlVO, si no has sido tu verifica inmediatamente:https://bbva.usuario-esp.pw/"
        );
        cy.get("button").last().click();
        cy.get("div.p-dropdown-trigger").click();
        cy.contains("Algeria").click();
        cy.contains("Aceptar").click();
        cy.wait(4000);
        cy.get("div.p-panel-content").contains(
            "¡Cuidado! El mensaje podría ser phishing"
        );
        cy.get("button").last().click();
    })

    it("try analyse empty phishing message", () => {
        cy.get("a.p-menuitem-link").eq(1).click();
        cy.get("button").last().click();
        cy.get("div.p-dropdown-trigger").click();
        cy.contains("Algeria").click();
        cy.contains("Aceptar").click();
        cy.get("div.p-message-wrapper").contains("El mensaje no debe estar vacío")
    })

    /*Search another text "ex-phishing"

    it("try analyse late phishing message", () => {
        cy.get("i.pi.pi-search").click();
        cy.get("textarea.p-inputtextarea").type(
            "INFO:Su cuenta sera inhabilitada debido a un inicio de sesion sospechoso.Verifique su dispositivo unicamente desde el siguiente enlace: http://bit.do/INFOBBVA"
        );
        cy.get("button").last().click();
        cy.wait(15000);
        cy.get("div.p-message-wrapper").contains("El tiempo de respuesta ha excedido");
    })
    */

    it("report phishing message successfully", () => {
        cy.get("a.p-menuitem-link").eq(1).click();
        cy.get("textarea.p-inputtextarea").type(
            "Se ha iniciado sesion desde un nuevo DlSPOSlTlVO, si no has sido tu verifica inmediatamente:https://bbva.usuario-esp.pw/"
        );
        cy.get("button").last().click();
        cy.get("div.p-dropdown-trigger").click();
        cy.contains("Algeria").click();
        cy.contains("Aceptar").click();
        cy.wait(4000);
        cy.get("div.p-panel-content").contains(
            "¡Cuidado! El mensaje podría ser phishing"
        );
        cy.get("button.p-button-report").click();
        cy.get("div.p-message-wrapper").contains("Mensaje denunciado correctamente");
    })

    it("report not phishing message successfully", () => {
        cy.get("a.p-menuitem-link").eq(1).click();
        cy.get("textarea.p-inputtextarea").type(
            "https://google.com"
        );
        cy.get("button").last().click();
        cy.get("div.p-dropdown-trigger").click();
        cy.contains("Algeria").click();
        cy.contains("Aceptar").click();
        cy.wait(6000);
        cy.get("div.p-panel-content").contains(
            "El mensaje no es considerado como phishing"
        );
    })
})