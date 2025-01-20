const SELCT_MARCA_VEICULO = '#make'
const SELECT_MODELO_VEICULO = '#model'
const INPUT_CAPACIADE_VEICULO = '#cylindercapacity'
const INPUT_DESENPENHO_MOTOR = '#engineperformance'
const INPUT_DATA_FABRICACAO = '#dateofmanufacture'
const SELECT_ACESSENTOS_CARRO = '#numberofseats'
const SELECT_DIRECAO= '.ideal-radio:eq(1)'
const SELECT_ACESSENTOS_MOTO = '#numberofseatsmotorcycle'
const SELEC_TIPO_CONBUSTIVEL = '#fuel'
const INPUT_CARGA_UTIL = '#payload'
const INPUT_PESO_TOTAL = '#totalweight'
const INPUT_VALOR_TABELA = '#listprice'
const INPUT_NUEMRO_MATRICULA = '#licenseplatenumber'
const INPUT_QUILOMETRAGEM_ANUAL = '#annualmileage'
const BTN_PROXIMO_DADOS_VEICULO = '#nextenterinsurantdata'



Cypress.Commands.add('preencherDadosEnterVehicleData', () =>{
    cy.get(SELCT_MARCA_VEICULO).select('Honda')
    cy.get(SELECT_MODELO_VEICULO).select('Motorcycle')
    cy.get(INPUT_CAPACIADE_VEICULO).type('1000')
    cy.get(INPUT_DESENPENHO_MOTOR).type('2000')
    cy.get(INPUT_DATA_FABRICACAO).type('12/29/2015')
    cy.get(SELECT_ACESSENTOS_CARRO).select('5')
    cy.get(SELECT_DIRECAO).click()
    cy.get(SELECT_ACESSENTOS_MOTO).select('2')
    cy.get(SELEC_TIPO_CONBUSTIVEL).select('Diesel')
    cy.get(INPUT_CARGA_UTIL).type('400')
    cy.get(INPUT_PESO_TOTAL).type('1300')
    cy.get(INPUT_VALOR_TABELA).type('25000')
    cy.get(INPUT_NUEMRO_MATRICULA).type('123456')
    cy.get(INPUT_QUILOMETRAGEM_ANUAL).type('100000')
   
})

Cypress.Commands.add('selecionarBotaoProximoDadosVeiculos', () =>{
    cy.get(BTN_PROXIMO_DADOS_VEICULO).click()
})