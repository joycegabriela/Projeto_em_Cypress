const INPUT_DATA_INICIO = '#startdate'
const SELCT_VALOR_SEGURO = '#insurancesum'
const SELCT_CLASSIFICACAO_MERITO = '#meritrating'
const SELCT_SEGUROS_DANOS = '#damageinsurance'
const SELECT_PRODUTOS_OPCIONAIS = '#LegalDefenseInsurance'
const SELECT_CARRO_CORTESIA = '#courtesycar'
const BTN_PROXIMO_DADOS_PRODUTO = '#nextselectpriceoption'

Cypress.Commands.add('preencherDadosProduto', () =>{
    cy.get(INPUT_DATA_INICIO).type('07/25/2026')
    cy.get(SELCT_VALOR_SEGURO).select('10.000.000,00')
    cy.get(SELCT_CLASSIFICACAO_MERITO).select('Bonus 3')
    cy.get(SELCT_SEGUROS_DANOS).select('No Coverage')
    cy.get(SELECT_PRODUTOS_OPCIONAIS).should('be.visible').click({force: true})
    cy.get(SELECT_CARRO_CORTESIA).select('Yes')
})

Cypress.Commands.add('selecionarBotaoProximoDadosProtudos', () =>{
    cy.get(BTN_PROXIMO_DADOS_PRODUTO).should('be.visible').click()
})