# Requisitos

## Requisitos Funcionais

### RF01 - Cadastro de estudante
O sistema deve permitir que estudantes criem uma conta informando nome, CPF, e-mail, instituição e matrícula.

### RF02 - Aprovação de estudante
O administrador deve conseguir aprovar ou rejeitar estudantes cadastrados.

### RF03 - Emissão de passe estudantil
O sistema deve emitir um passe digital para estudandes aprovados.

### RF04 - Geração de QR Code dinâmico
O aplicativo deve gerar um QR code temporário para validação.

### RF05 - Validação do passe
O validador deve conseguir escanear o QR Code e consultar a API.

## Requisitos Não Funcionais

### RNF01 - Segurança
O QR Code não deve expor dados sensíveis do estudante.

### RNF02 - Performance
A validação do passe deve responder rapidamente.

### RNF03 - Auditoria
Toda tentativa de validação deve gerar log.