const CLICK_TIPO_PRECO = '#selectplatinum'
const BTN_PROXIMO_OPCAO_PAGAMENTO = '#nextsendquote'



Cypress.Commands.add('selecionarOpcaoPreco', () =>{
    cy.get(CLICK_TIPO_PRECO).click({force: true})
})

Cypress.Commands.add('selecionarBotaoOpcaoPagamento', () =>{
    cy.get(BTN_PROXIMO_OPCAO_PAGAMENTO).should('be.visible').click()
})