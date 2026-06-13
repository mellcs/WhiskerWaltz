# 🪲 Whisker Waltz

Whisker Waltz é um jogo narrativo desenvolvido como projeto final da disciplina de Laboratório de Inovação. O jogador explora o universo do Vale do Lírio, conversa com personagens, descobre informações sobre o mundo do jogo e pode interagir com um assistente virtual alimentado por IA.

O projeto utiliza a técnica de RAG (Retrieval-Augmented Generation), permitindo que o assistente responda perguntas com base em documentos de lore do universo do jogo.

---

## 🪲 Objetivo

Criar uma experiência interativa em que o jogador possa:

- Explorar o universo do Vale do Lírio;
- Conhecer personagens e locais da história;
- Consultar um assistente virtual integrado ao jogo;
- Receber respostas contextualizadas utilizando informações da lore do mundo.

---

## 🪲 Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- CSS

### Backend

- Node.js
- Express
- CORS

### Inteligência Artificial

- RAG (Retrieval-Augmented Generation)
- Hugging Face Inference API
- Modelo Gemma 2 2B

---

## 🪲 Arquitetura

Fluxo de funcionamento:

1. O jogador faz uma pergunta ao assistente.
2. O backend recebe a mensagem.
3. O sistema realiza uma busca nos documentos de lore.
4. As informações encontradas são adicionadas ao prompt.
5. O modelo de IA gera uma resposta utilizando apenas o contexto recuperado.
6. A resposta é enviada ao jogador.

```text
Jogador
   ↓
Frontend (React)
   ↓
Backend (Express)
   ↓
Busca na Lore (RAG)
   ↓
Modelo de IA
   ↓
Resposta ao Jogador
```

---

## 🪲 Como Executar Localmente

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🪲 Variáveis de Ambiente

Crie um arquivo `.env` na pasta do backend:

```env
HF_TOKEN=SUA_CHAVE_HUGGING_FACE
```

---

## 🪲 Funcionalidades

- Assistente virtual integrado ao jogo;
- Busca automática de informações da lore;
- Respostas contextualizadas por IA;
- Interface de conversa em tempo real;
- Sistema completo acessível via navegador.

---

## 🪲 Aplicação de Inteligência Artificial

O projeto utiliza a abordagem RAG (Retrieval-Augmented Generation).

Antes de gerar uma resposta, o sistema pesquisa informações relevantes em uma base de documentos contendo a lore do Vale do Lírio. Essas informações são incorporadas ao prompt enviado ao modelo de linguagem, reduzindo alucinações e aumentando a fidelidade das respostas ao universo do jogo.

---

## 🪲 Possíveis Melhorias Futuras

- Memória de conversa entre mensagens;
- Expansão da base de lore;
- Integração com missões e personagens do jogo;
- Sistema de recomendações e dicas para jogadores;
- Otimização do mecanismo de recuperação de contexto;
- Desenvolvimento de novos episódios.

---

## 🪲 Autoria

Projeto desenvolvido para a disciplina de Laboratório de Inovação como demonstração prática da aplicação de RAG em um sistema interativo acessível via navegador.

---

## 🪲 Acesse o projeto
https://whisker-waltz-2c3kw8bqx-mewlis-projects1.vercel.app/
