# Modelo de Dados

## Entidades principais

### Student

- id
- name
- cpf
- email
- institution
- registration_number
- status
- created_at
- updated_at

### DigitalPass

- id
- student_id
- public_id
- status
- issued_at
- expires_at
- revoked_at

### ValidationLog

- id
- digital_pass_id
- validator_id
- result
- reason
- validated_at