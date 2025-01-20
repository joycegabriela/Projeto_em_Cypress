const INPUT_PRIMEIRO_NOME = '#firstname'
const INPUT_ULTIMO_NOME ='#lastname'
const INPUT_DATA_NASCIMENTO = '#birthdate'
const INPUT_ENDERECO = '#streetaddress'
const SELECT_PAIS = '#country'
const INPUT_CPE = '#zipcode'
const INPUT_CIDADE = '#city'
const SELECT_OCUPACAO = '#occupation'
const SELECT_HOBBIES = '.ideal-check:eq(4)'
const BTN_PROXIMO_DADOS_PESSOAIS = '#nextenterproductdata'


Cypress.Commands.add('preencherDadosEnterInsurantData', () =>{
    cy.get(INPUT_PRIMEIRO_NOME).type('Joyce')
    cy.get(INPUT_ULTIMO_NOME).type('Ferreira')
    cy.get(INPUT_DATA_NASCIMENTO).type('01/13/2003')
    cy.get(INPUT_ENDERECO).type('AV João Pé de Feijão')
    cy.get(SELECT_PAIS).select('Brazil')
    cy.get(INPUT_CPE).type('5340500')
    cy.get(INPUT_CIDADE).type('Paulista')
    cy.get(SELECT_OCUPACAO).select('Employee')
    cy.get(SELECT_HOBBIES).click()

})

Cypress.Commands.add('selecionarBotaoProximoDadosPessoais', () =>{
    cy.get(BTN_PROXIMO_DADOS_PESSOAIS).should('be.visible').click()

})