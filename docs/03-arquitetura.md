# Arquitetura

## Visão Geral

O sistema será composto por três aplicações principais:

- Aplicativo Mobile do Estudante
- Backend/API
- Painel Administrativo

## Mobile

Responsável por:

- autenticação do estudante
- exibição do passe digital
- geração do QR Code dinâmico
- consulta de status do passe

## Backend

Responsável por:

- autenticação
- regras de negócio
- emissão de passes
- validação de QR Codes
- persistência dos dados

## Admin

Responsável por:

- aprovar estudantes
- bloquear/revogar passes
- consultar histórico de validações