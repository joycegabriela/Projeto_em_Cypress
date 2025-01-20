const INPUT_EMAIL = '#email'
const INPUT_CELULAR = '#phone'
const INPUT_NOME_USUARIO = '#username'
const INPUT_SENHA = '#password'
const INPUT_CONFIRME_SENHA = '#confirmpassword'
const INPUT_COMENTARIOS = '#Comments'
const BTN_ENVIAR= '#sendemail'
const ALERT_MESSAGE = '.sweet-alert'


Cypress.Commands.add('preencherDadosEviarCotacao', () =>{
    cy.get(INPUT_EMAIL).type('joyce.gabi1313@gmail.com')
    cy.get(INPUT_CELULAR).type('81999999999')
    cy.get(INPUT_NOME_USUARIO).type('Joyce')
    cy.get(INPUT_SENHA).type(Cypress.env('senha'))
    cy.get(INPUT_CONFIRME_SENHA).type(Cypress.env('senha'))
    cy.get(INPUT_COMENTARIOS).type('Teste')


})

Cypress.Commands.add('preencherDadosEviarCotacaoIncorretos', () =>{
    cy.get(INPUT_EMAIL).type('joyce.gabi1313@gmail.com')
    cy.get(INPUT_CELULAR).type('81999999999')
    cy.get(INPUT_NOME_USUARIO).type('Joyce')
    cy.get(INPUT_SENHA).type(Cypress.env('senha'))
    cy.get(INPUT_CONFIRME_SENHA).type('12345')
    cy.get(INPUT_COMENTARIOS).type('Teste')


})

Cypress.Commands.add('selecionarBotaoEnviarCotacao', () =>{
    cy.get(BTN_ENVIAR).should('be.visible').click()
})

Cypress.Commands.add('validarConfirmacao', () =>{
    cy.get(ALERT_MESSAGE, {timeout: 10000 }).should('be.visible').and('contain', 'Sending e-mail success!')
})

Cypress.Commands.add('validarConfirmacaoIncorreta', () =>{
    cy.get(ALERT_MESSAGE, {timeout: 10000 }).should('be.visible').and('contain', 'Not finished yet...')
})