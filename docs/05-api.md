# API

## Auth

### POST /api/auth/register

Cria uma conta de estudante.

### POST /api/auth/login

Autentica o usuário.

## Students

### GET /api/students/me

Retorna os dados do estudante autenticado.

## Passes

### GET /api/passes/me

Retorna o passe digital do estudante autenticado.

### POST /api/passes/validate

Valida um QR Code enviado pelo app validador.

## Admin

### GET /api/admin/students

Lista estudantes cadastrados.

### POST /api/admin/students/{id}/approve

Aprova um estudante.

### POST /api/admin/passes/{id}/revoke

Revoga um passe.