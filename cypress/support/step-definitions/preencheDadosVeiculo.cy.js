Given('que acesso o tricentis',() =>{
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})

And('preencho os dados obrigatório da aba Enter Vehicle Data', () =>{
    cy.preencherDadosEnterVehicleData()
})

And('clico no butão de Next da aba Enter Vehicle Data', () =>{
    cy.selecionarBotaoProximoDadosVeiculos()
})

And('preencho os dados pessoais obrigatórios na aba Enter Insurant Data', () =>{
    cy.preencherDadosEnterInsurantData()
})

And('clico no butão de Next da aba Enter Insurant Data', () =>{
    cy.selecionarBotaoProximoDadosPessoais()
})

And('preencho os dados obrigatório da aba Enter Product Data', () =>{
    cy.preencherDadosProduto()
})

And('clico no butão de Next da aba Enter Product Data', () =>{
    cy.selecionarBotaoProximoDadosProtudos()
})

And('seleciono o tipo de preço na aba Select Price Option', () =>{
    cy.selecionarOpcaoPreco()
})

And('clico no butão de Next da aba Select Price Option', () =>{
    cy.selecionarBotaoOpcaoPagamento()
})

And('preencho os campos obrigatorio da aba Send Quote', () =>{
    cy.preencherDadosEviarCotacao()
})

And('preencho os campos obrigatorio incorretos da aba Send Quote', () =>{
    cy.preencherDadosEviarCotacaoIncorretos()
})

Then('clico no butão de Enviar cotação da aba Send Quote', () =>{
    cy.selecionarBotaoEnviarCotacao()
})

And('valido a confirmação', () =>{
    cy.validarConfirmacao()
})

And('valido o erro da confirmação', () =>{
    cy.validarConfirmacaoIncorreta()
})




