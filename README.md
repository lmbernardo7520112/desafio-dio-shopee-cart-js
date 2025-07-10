# Shopee Cart Logic Engine 🛒

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Uma base de backend robusta e modular para um sistema de carrinho de compras, inspirada na funcionalidade da Shopee. Este projeto demonstra **princípios de engenharia de software profissional** aplicados a um cenário do mundo real.

---

## 🎯 Filosofia e Conceitos Chave

O design é guiado pelos seguintes princípios:

*   📦 **Arquitetura Modular:** O código é organizado em `entidades` e `serviços`, tornando-o intuitivo, fácil de manter e de dar manutenção.

*   🧩 **Separação de Responsabilidades (SoC):** A lógica de negócio (como calcular um total) está completamente isolada da definição dos dados (o que é um item). Isso é crucial para a testabilidade e a evolução do sistema.

*   📈 **Escalabilidade por Design:** A estrutura atual permite a adição de novas funcionalidades (como cupons, frete, autenticação) ou a troca de componentes (como migrar de um array em memória para um banco de dados) com impacto mínimo no resto do código.

*   🧼 **Código Limpo e Reutilizável:** As funções de serviço (`addItem`, `removeItem`) são puras em seu propósito, operando sobre os dados que recebem. Elas podem ser reutilizadas para um carrinho de compras, uma lista de desejos ou qualquer outra coleção de itens.

---

## 🚀 Demonstração Rápida

O script de entrada simula um fluxo de usuário completo:

```bash
# Saída da execução do projeto
> npm start

🛍️ Welcome to the Shopee Cart! 🛍️

--- ADDING ITEMS ---

📜 My Cart List:
1. Hotwheels Ferrari - R$ 20,99 | 1x | Subtotal: R$ 20,99
2. Hotwheels Lamborghini - R$ 39,99 | 3x | Subtotal: R$ 119,97

📜 My Wishlist List:
1. Hotwheels Porsche - R$ 15,50 | 2x | Subtotal: R$ 31,00

--- REMOVING ONE LAMBORGHINI ---

📜 My Cart List:
1. Hotwheels Ferrari - R$ 20,99 | 1x | Subtotal: R$ 20,99
2. Hotwheels Lamborghini - R$ 39,99 | 2x | Subtotal: R$ 79,98

--- DELETING FERRARI ---

📜 My Cart List:
1. Hotwheels Lamborghini - R$ 39,99 | 2x | Subtotal: R$ 79,98

🛒 Shopee Cart Total is:
-> Total: R$ 79,98
```

---

## 🛠️ Tecnologias e Ferramentas

*   **Runtime:** 🟢 [Node.js](https://nodejs.org/)
*   **Linguagem:** 🟡 JavaScript (ES6+ com Módulos)
*   **Gerenciador de Pacotes:** 📦 [NPM](https://www.npmjs.com/)
*   **Controle de Versão:** 🐙 [Git](https://git-scm.com/)

---

## ✨ Funcionalidades Implementadas

- [x] Criação de itens com nome, preço e quantidade.
- [x] Adição de itens a um carrinho.
- [x] Remoção de uma unidade de um item do carrinho.
- [x] Exclusão completa de um item do carrinho.
- [x] Cálculo do subtotal por item.
- [x] Cálculo do total do carrinho.
- [x] Exibição formatada do conteúdo do carrinho no console.
- [x] Suporte para múltiplas listas (ex: `myCart` e `myWishlist`) usando os mesmos serviços.

---

## 🏁 Como Começar

Siga os passos abaixo para executar o projeto localmente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/shopee-cart-logic.git
    cd shopee-cart-logic
    ```

2.  **Instale as dependências** (atualmente nenhuma, mas é uma boa prática):
    ```bash
    npm install
    ```

3.  **Execute a simulação:**
    ```bash
    npm start
    ```

---

## 📁 Estrutura do Projeto

A organização dos arquivos foi pensada para clareza e escalabilidade.

```
/
├── src/
│   ├── entities/
│   │   └── item.js         # 👉 Define a "forma" de um item e seu comportamento
│   ├── services/
│   │   └── cart.js         # 👉 Contém toda a lógica de negócio do carrinho
│   └── index.js            # 👉 Ponto de entrada que simula o uso
├── .gitignore              # Ignora arquivos desnecessários (node_modules)
├── package.json            # Define os scripts e metadados do projeto
└── README.md               # 👈 Você está aqui!
```

---

## 🗺️ Roadmap Futuro

A implementação atual é a base de lançamento para um backend de e-commerce completo. Próximos passos planejados:

- [ ] **API RESTful:** Expor os serviços do carrinho através de endpoints HTTP usando Express.js.
- [ ] **Persistência de Dados:** Integrar um banco de dados (ex: MongoDB ou PostgreSQL) para armazenar os carrinhos.
- [ ] **Testes Unitários:** Implementar testes com Jest para garantir a confiabilidade dos serviços.
- [ ] **Validação de Dados:** Adicionar validação (ex: Zod ou Joi) para garantir a integridade dos dados de entrada.
- [ ] **Funcionalidade de Cupons:** Adicionar um serviço para aplicar descontos ao carrinho.
