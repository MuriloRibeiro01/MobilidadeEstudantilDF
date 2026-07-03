# Segurança

## Princípios

- Não expor CPF, matrícula ou e-mail no QR Code.
- Usar QR Code com expiração curta.
- Assinar payload com HMAC.
- Registrar todas as validações.
- Permitir revogação imediata do passe.

## Ameaças consideradas

### Print do QR Code

Mitigação: QR Code dinâmico com validade curta.

### Reutilização do QR Code

Mitigação: timestamp, assinatura e possível controle de nonce.

### Passe bloqueado tentando validar

Mitigação: validação sempre consulta status atual do passe na API.