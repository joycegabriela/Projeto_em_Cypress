# utf-8
# language: pt

Funcionalidade: testepreencheDadosVeiculo
  # Cenário: Preencher Dados do Veiculo
  #   Dado que acesso o tricentis
  #   E preencho os dados obrigatório da aba Enter Vehicle Data
  #   E clico no butão de Next da aba Enter Vehicle Data
  #   E preencho os dados pessoais obrigatórios na aba Enter Insurant Data
  #   E clico no butão de Next da aba Enter Insurant Data
  #   E preencho os dados obrigatório da aba Enter Product Data
  #   E clico no butão de Next da aba Enter Product Data
  #   E seleciono o tipo de preço na aba Select Price Option
  #   E clico no butão de Next da aba Select Price Option
  #   E preencho os campos obrigatorio da aba Send Quote
  #   Então clico no butão de Enviar cotação da aba Send Quote
  #   E valido a confirmação

    Cenário: Preencher Dados do Veiculo Erro na senha
    Dado que acesso o tricentis
    E preencho os dados obrigatório da aba Enter Vehicle Data
    E clico no butão de Next da aba Enter Vehicle Data
    E preencho os dados pessoais obrigatórios na aba Enter Insurant Data
    E clico no butão de Next da aba Enter Insurant Data
    E preencho os dados obrigatório da aba Enter Product Data
    E clico no butão de Next da aba Enter Product Data
    E seleciono o tipo de preço na aba Select Price Option
    E clico no butão de Next da aba Select Price Option
    E preencho os campos obrigatorio incorretos da aba Send Quote
    Então clico no butão de Enviar cotação da aba Send Quote
    E valido o erro da confirmação

