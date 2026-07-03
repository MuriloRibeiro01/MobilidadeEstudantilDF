# Regras de Negócio

## RN01 — Apenas estudantes aprovados possuem passe ativo

Um estudante só pode receber um passe digital após aprovação administrativa.

## RN02 — QR Code deve expirar

O QR Code gerado pelo app deve ter validade curta, inicialmente de 30 segundos.

## RN03 — Passe bloqueado não pode ser validado

Se o passe estiver bloqueado, expirado ou revogado, a validação deve ser negada.

## RN04 — Validação deve ser registrada

Toda validação, aprovada ou recusada, deve ser registrada com data, hora, motivo e identificador do validador.