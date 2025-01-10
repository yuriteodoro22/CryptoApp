# CryptoApp 📈

CryptoApp é uma aplicação web que permite aos usuários explorar informações sobre criptomoedas, visualizar detalhes específicos de cada uma e acompanhar o mercado de forma prática e organizada.

## Funcionalidades

- **Home:**
  - Busca criptomoedas em tempo real através da API CoinCap.
  - Lista informações como nome, símbolo, valor de mercado, preço, volume e mudança em 24 horas.
  - Permite carregar mais dados dinamicamente.

- **Detalhes:**
  - Exibe detalhes completos de uma criptomoeda, como preço, volume e mudança nas últimas 24 horas.
  - Inclui ícone representativo da moeda.

- **Página de Erro 404:**
  - Exibe uma mensagem amigável para rotas não encontradas.

- **Layout Responsivo:**
  - Ajusta a exibição dos dados para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **React** com React Router DOM
- **TypeScript**
- **CSS Modules**
- **Vite** como ferramenta de build

## Estrutura do Projeto

- **App.tsx:** Arquivo principal que integra as rotas configuradas.
- **Home:** Página inicial com listagem de criptomoedas e opção de busca.
- **Details:** Página de detalhes de uma criptomoeda específica.
- **NotFound:** Página para rotas inexistentes.
- **Layout:** Estrutura principal que inclui o cabeçalho e o conteúdo.
- **Header:** Cabeçalho com link para a página inicial.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cryptoapp.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd cryptoapp
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute a aplicação:
   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Configuração da API

Esta aplicação utiliza a API CoinCap para buscar informações de criptomoedas. Certifique-se de que sua conexão está ativa e funcionando corretamente para acessar os dados.

## Estrutura de Diretórios

```plaintext
src/
├── assets/
│   └── logo.svg
├── components/
│   ├── header/
│   │   ├── index.tsx
│   │   └── header.module.css
│   └── layout/
│       └── index.tsx
├── pages/
│   ├── home/
│   │   ├── index.tsx
│   │   └── home.module.css
│   ├── details/
│   │   ├── index.tsx
│   │   └── detail.module.css
│   └── notfound/
│       └── index.tsx
├── App.tsx
├── main.tsx
├── routes.tsx
├── index.css
└── vite-env.d.ts
```


## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Yuri Teodoro**
