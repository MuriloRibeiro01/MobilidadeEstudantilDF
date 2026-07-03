# Fluxos do Sistema

## Fluxo de cadastro

1. Estudante cria conta.
2. Sistema registra estudante como pendente.
3. Admin analisa cadastro.
4. Admin aprova estudante.
5. Sistema emite passe digital.

## Fluxo de validação

1. Estudante abre o app.
2. App gera QR Code temporário.
3. Validador escaneia QR Code.
4. Validador envia payload para API.
5. API verifica assinatura, validade e status.
6. API retorna aprovado ou negado.
7. Sistema registra log.