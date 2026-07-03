# 🎓 Passe Estudantil Digital

> Transformando o passe estudantil físico em uma credencial digital segura, acessível e sempre disponível no smartphone.

## 📖 Sobre o Projeto

O **Passe Estudantil Digital** nasceu da observação de um problema recorrente enfrentado por estudantes do Distrito Federal: a perda ou o esquecimento do cartão físico utilizado no transporte público.

Enquanto cartões bancários, ingressos, documentos e até chaves já podem ser armazenados em carteiras digitais, o passe estudantil ainda depende exclusivamente de um cartão físico.

Este projeto propõe uma solução moderna para esse problema por meio da criação de uma credencial digital segura, que poderá futuramente ser utilizada em sistemas oficiais de transporte público.

> **Importante:** este projeto não possui qualquer vínculo com órgãos públicos ou empresas de transporte. Seu objetivo é servir como prova de conceito (Proof of Concept) e estudo de arquitetura para sistemas de bilhetagem digital.

---

# 🎯 Objetivos

* Eliminar a dependência do cartão físico.
* Permitir bloqueio e reemissão instantânea da credencial.
* Aumentar a segurança contra clonagem e uso indevido.
* Facilitar futuras integrações com sistemas de transporte.
* Demonstrar uma arquitetura moderna para credenciais digitais.

---

# 🚀 MVP

A primeira versão do projeto terá foco na validação do conceito.

Funcionalidades previstas:

* Cadastro de estudantes
* Login seguro
* Painel administrativo
* Aprovação de estudantes
* Emissão de passe digital
* QR Code dinâmico
* Simulador de validador/catraca
* Histórico de validações
* Bloqueio e revogação de passes

---

# 🏗 Arquitetura

```text
                +----------------------+
                |   Aplicativo Mobile  |
                |   (React Native)     |
                +----------+-----------+
                           |
                           |
                    HTTPS / REST API
                           |
                           ▼
                +----------------------+
                |     Laravel API      |
                +----------+-----------+
                           |
                           |
                    PostgreSQL Database
                           |
                           ▼
        +-----------------------------------+
        | Estudantes                        |
        | Passes                            |
        | Validações                        |
        | Logs                              |
        +-----------------------------------+

                           ▲
                           |
                +----------+-----------+
                | Painel Administrativo |
                | Laravel Blade         |
                +-----------------------+
```

---

# 📱 Tecnologias

## Mobile

* React Native
* Expo
* TypeScript
* Expo Camera
* Expo Secure Store

## Backend

* Laravel
* PHP
* PostgreSQL
* JWT Authentication

## Painel Administrativo

* Laravel Blade
* Tailwind CSS

---

# 🔐 Segurança

O projeto foi concebido com foco em segurança desde o início.

Algumas medidas planejadas:

* QR Code dinâmico
* Assinatura criptográfica (HMAC)
* Expiração automática das credenciais
* Revogação de passes
* Autenticação JWT
* Registro de logs
* Proteção contra reutilização de QR Codes

---

# 📂 Estrutura Inicial

```text
digital-student-pass/

├── backend/
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── ...
│
├── mobile/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── ...
│
├── admin/
│   ├── resources/
│   ├── public/
│   └── ...
│
├── docs/
│   ├── arquitetura/
│   ├── diagramas/
│   └── pesquisas/
│
└── README.md
```

---

# 🗺 Roadmap

## Fase 1

* [ ] Definição da arquitetura
* [ ] Modelagem do banco
* [ ] Configuração do ambiente
* [ ] Estrutura inicial do backend

## Fase 2

* [ ] Cadastro de estudantes
* [ ] Login
* [ ] Painel administrativo
* [ ] Emissão de passe

## Fase 3

* [ ] Aplicativo mobile
* [ ] QR Code dinâmico
* [ ] Histórico de utilização

## Fase 4

* [ ] Aplicativo validador
* [ ] Simulação de catraca
* [ ] Logs de validação

## Fase 5

* [ ] Testes
* [ ] Documentação
* [ ] Deploy
* [ ] Demonstração pública

## Futuras funcionalidades

* NFC
* Integração com Google Wallet
* Integração com Apple Wallet
* Credencial offline
* Biometria
* Push Notifications
* Integração com sistemas oficiais de transporte
* Integração com identidade estudantil digital

---

# 💡 Visão de Futuro

A longo prazo, o projeto busca demonstrar que credenciais estudantis podem evoluir para um modelo totalmente digital, reduzindo custos operacionais, diminuindo perdas de cartões físicos e melhorando a experiência dos estudantes.

Embora o MVP utilize QR Codes para validação, a arquitetura foi planejada para permitir futuras integrações com tecnologias como NFC, carteiras digitais e sistemas oficiais de bilhetagem.

---

# 🤝 Contribuições

Contribuições são bem-vindas.

Caso tenha sugestões, ideias ou melhorias, fique à vontade para abrir uma *Issue* ou enviar um *Pull Request*.

---

# 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

## 👨‍💻 Autor

**Murilo Ribeiro**

Engenheiro de Software em formação, apaixonado por desenvolvimento mobile, arquitetura de software, inteligência artificial e soluções que geram impacto real na sociedade.

> "A melhor tecnologia é aquela que resolve problemas reais de forma simples e segura."
