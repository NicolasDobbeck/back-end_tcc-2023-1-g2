/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA CONFIGURAÇÃO DE VARIÁVEIS 
CONSTANTES E MENSAGENS DO SISTEMA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 03/03/2023
VERSÃO: 1.0
************************************************************************/

const MESSAGE_ERROR = {
    REQUIRED_FIELDS: "EXISTE(M) CAMPO(S) OBRIGATÓRIO(S) QUE DEVE(M) SER PREENCHIDOS(S)",
    INVALID_EMAIL: "O E-MAIL INFORMADO NÃO É VÁLIDO",
    CONTENT_TYPE: "O CABEÇALHO DA REQUISIÇÃO NÃO POSSUI UM CONTENT-TYPE VÁLIDO",
    EMPTY_BODY: "O BODY DA REQUISIÇÃO NÃO PODE SER VAZIO",
    NOT_FOUND_DB: "NÃO FORAM ENCONTRADOS REGISTROS NO BANCO DE DADOS",
    INTERNAL_ERROR_DB: "NÃO FOI POSSÍVEL REALIZAR A OPERAÇÃO COM O BANCO DE DADOS",
    REQUIRED_ID: "O ID DO REGISTRO É OBRIGATÓRIO NESTE TIPO DE REQUISIÇÃO",
    CHARACTERS_EXCEEDED: "NÚMERO DE CARACTERES EXCEDIDO",
    INVALID_USER: "O USUÁRIO NÃO É VALIDO"
}

const MESSAGE_SUCCESS = {
    INSERT_ITEM: "ITEM CRIADO COM SUCESSO NO BANCO DE DADOS",
    UPDATE_ITEM: "ITEM ATUALIZADO COM SUCESSO NO BANCO DE DADOS",
    DELETE_ITEM: "ITEM EXCLUÍDO COM SUCESSO NO BANCO DE DADOS",
    JWT_CREATED: "TOKEN JWT CRIADO COM SUCESSO",
}

module.exports = {
    MESSAGE_ERROR,
    MESSAGE_SUCCESS
}