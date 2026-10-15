# Handoff: Landing Page "Eu Amo Matrículas" — rodada de ajustes

Repo: `HeitorQueAnd/euamomatriculas` (Next.js, branch `main`)

## Overview
Atualização da landing da formação comercial Eu Amo Matrículas (Academia Claraval). Este pacote descreve **as mudanças em relação ao que está hoje no repo** (`src/components/Landing.tsx`, `LeadForm.tsx`, `VinhoTintaBand.tsx`) para o dev aplicar e commitar.

## About the Design Files
`Eu Amo Matriculas.dc.html` é uma **referência de design em HTML** (abra no navegador junto com `support.js`). Não é código de produção — recrie as mudanças nos componentes React/Tailwind existentes do repo, mantendo os padrões atuais (ScrollReveal, tokens do `globals.css`, fontes Fraunces + DM Sans).

## Fidelity
**High-fidelity.** Cores, tipografia, espaçamentos e textos são finais.

## Mudanças (checklist para o commit)

### 1. Ritmo de seções — alternância escuro/claro
A página agora alterna fundos, começando escuro:
1. Hero — escuro `#0d0809`
2. Carrossel de escolas + "Para quem é" — **claro** `#faf5ee` (o carrossel fica no topo dessa seção, com `border-bottom: 1px solid rgba(20,13,15,0.1)`, padding 30px 0; nomes em Fraunces 1.45rem/500, `rgba(20,13,15,0.55)`)
3. "O que é o Eu Amo Matrículas" (4 pilares numerados) — escuro
4. "O que você irá receber" — claro
5. "Os 3 pilares" (I/II/III + bloco +70 estímulos) — escuro
6. Programação — claro
7. Citação Fernando Zago — claro
8. Galeria Tinto e Tinta — escuro
9. Formulário — claro

Em seção clara: texto `#140d0f`, secundário `rgba(20,13,15,0.7)`, terciário `rgba(20,13,15,0.55)`, acento `#9a1c3a`, bordas `rgba(20,13,15,0.12)`, cards `rgba(154,28,58,0.04)`.
Em seção escura: texto `#f6efe6`, secundário `#b6a79c`, terciário `#8a7a70`, acento `#d75c70`/`#bc2649`, bordas `rgba(255,255,255,0.08)`, cards `rgba(255,255,255,0.025)`.

### 1b. Carrossel de escolas — novos nomes
Adicionar ao final da lista: **CSFX**, **Colégio São Francisco Xavier**, **Marista**, **Objetivo**, **Escola SEB**.

### 2. Removido: banda "Parceria especial / Claraval com Vinho Tinta"
Excluir o bloco de cabeçalho/tags do `VinhoTintaBand`. **Manter apenas o marquee de escolas**, movido para dentro da seção "Para quem é" (ver item 1).

### 3. Renomear "Vinho e Tinta" → "Tinto e Tinta"
Todas as ocorrências de copy e `alt`.

### 4. Hero
- H1 passa a ser: **"O maior movimento de matrículas do Brasil"** (sublinhado vinho agora em "movimento").
- Coluna da foto removida; no lugar, **vídeo vertical em autoplay, sem áudio, em loop**:
  - Container: `max-width: 340px; aspect-ratio: 9/16; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 30px 70px -30px rgba(188,38,73,0.45); background: #140d0f`
  - `<video src="/videos/lp-matriculas.mp4" poster="/fotos/formacao-sala.jpg" autoPlay muted loop playsInline preload="auto">` com `object-fit: cover`
  - **Rota do arquivo:** `/videos/lp-matriculas.mp4` — o dev sobe o vídeo no storage/CDN e troca a URL (ou coloca em `public/videos/`).
  - O original é `LP matriculas.mov`: converter para **MP4 (H.264, sem faixa de áudio)**, ~1080×1920 ou 720×1280, idealmente < 5 MB. .mov não toca no Chrome/Android.
  - `muted` + `playsInline` são obrigatórios para o autoplay funcionar no iOS/Chrome.
- Parágrafo de descrição passa a ser:
  > Em vez de dicas e hacks, ensinamos processo, gestão e técnica de vendas. O líder e o time de atendimento da sua escola treinam juntos, na prática, dentro de um único método: **formação presencial**, **formação online para o time** e acompanhamento com a **IA Clara**.
  - Destaques em `<strong>` 600: os dois primeiros em `#f6efe6`, "IA Clara" em `#d75c70`.

### 4b. "O que é o Eu Amo Matrículas" — pilar 01
Texto: "Para o líder e o time **da sua escola, com certificado**. Abordagem, rapport, apresentação e qualificação treinados na prática."

### 5. "O que você irá receber" — imagem nova
Grid 2 colunas (`repeat(auto-fit, minmax(320px,1fr))`, gap 48px): à esquerda `workbook.jpg` (altura 560px, radius 16px, `object-position: center 40%`), à direita a lista de 8 itens em coluna única (gap 22px).

### 6. Programação — novo horário (17h00 → 21h30)
Bloco "Vinho e Tinta" removido. Título: **"Formação presencial de 5 horas com certificado"**.

| Hora | Duração | Bloco |
|---|---|---|
| 17h00 | 30 min | Credenciamento e boas-vindas |
| 17h30 | 25 min | Campanha de matrículas: da atração à retenção |
| 17h55 | 30 min | Canais de atração e prospecção ativa |
| 18h25 | 50 min | Como estruturar o processo comercial |
| 19h15 | 30 min | Coffee break especial |
| 19h45 | 55 min | A importância de uma apresentação eficaz |
| 20h40 | 35 min | Como contornar objeções |
| 21h15 | 15 min | Plano de 30 dias e certificados |

(Textos e tópicos de cada bloco iguais aos atuais — ver array `programacao` no HTML.)

### 7. Galeria Tinto e Tinta — fotos novas
3 colunas, altura 420px, radius 16px:
1. `tinto-tinta-apresentacao.jpg` — `object-position: center 30%`
2. `tinto-tinta-jantar.jpg` — `object-position: 60% center`
3. `tela-palmeira.jpg` — `object-position: center 35%`

### 8. Seção do formulário
- **Card de investimento** (após o parágrafo de introdução, antes da lista):
  bg `#140d0f`, radius 16px, padding 26px 28px, max-width 460px.
  Eyebrow "Investimento" (`#d75c70`) + preço em Fraunces: `R$` (1.1rem, `#b6a79c`) **947,00** (clamp(2.6rem,5vw,3.2rem)/600, `#f6efe6`) `/mês` (1.1rem, `#b6a79c`).
- **Turmas presenciais:** label vira "Próximas turmas presenciais · com certificado". Chips:
  - Brasília **27 de outubro**
  - São Paulo **04 de novembro**
  - Goiânia (sem data) e "Leve para a sua cidade →" (WhatsApp) permanecem.
  - Chip com data: border `rgba(154,28,58,0.35)`, data em `<strong>` 700 `#9a1c3a`.
- Card do formulário: fundo `#ffffff`, border `#e0d5c6`, sombra `0 24px 60px -32px rgba(20,13,15,0.35)`.

### 9. Pós-envio → checkout Stripe embutido
Após submit com sucesso (manter o envio atual para RD Station / `/api/track`), substituir o form **no mesmo card** por:
- Ícone ✓ (48px círculo `#9a1c3a`), título "Cadastro enviado, {primeiro nome}", texto "Finalize sua inscrição abaixo com o pagamento seguro."
- Stripe Buy Button:
```html
<script async src="https://js.stripe.com/v3/buy-button.js"></script>
<stripe-buy-button
  buy-button-id="buy_btn_1UQoM6CjaH5UL316h9vKpMsX"
  publishable-key="pk_live_51ULTWcCjaH5UL316EBUjzv0KImhjpT44Ag6hgMqsMzTq9g51udKeAbdPpg0iuIfVhW19nAkJy1SXrAk9nPW5A0Et00xcjS6MCA"
  customer-email="{email do form}"
  client-reference-id="{nome__escola__telefone, sanitizado}">
</stripe-buy-button>
```
- `client-reference-id`: junte nome, escola e telefone (só dígitos) com `__`, remova acentos, troque tudo fora de `[A-Za-z0-9_-]` por `-`, máx. 200 chars. Assim nome/escola/WhatsApp aparecem no pagamento no painel Stripe (o Buy Button só pré-preenche o e-mail).
- Em React/Next: carregar o script via `next/script` e declarar o tipo JSX de `stripe-buy-button`.

## Assets
Novos (em `assets/` deste pacote → mover para `public/fotos/`), já redimensionados p/ 1600px e comprimidos (130–300 KB):
- `formacao-sala.jpg` — capa do card de vídeo do hero
- `workbook.jpg` — seção "O que você irá receber"
- `tinto-tinta-apresentacao.jpg`, `tinto-tinta-jantar.jpg`, `tela-palmeira.jpg` — galeria

`evento.jpg`, `vinho-tinta.jpg`, `atelie.jpg` deixam de ser usados.

## Files
- `Eu Amo Matriculas.dc.html` — referência completa (markup + array de dados no bloco `<script>` no fim)
- `support.js` — runtime para abrir o HTML localmente
- `assets/*.jpg`

## Sugestão de commit
```
feat(lp): rodada de ajustes Eu Amo Matrículas

- hero: "O maior movimento", vídeo vertical autoplay mudo (/videos/lp-matriculas.mp4), métodos no texto
- alterna seções escuro/claro; remove banda "Parceria especial", marquee dentro de "Para quem é"
- marquee: + CSFX, Colégio São Francisco Xavier, Marista, Objetivo, Escola SEB
- "Vinho e Tinta" -> "Tinto e Tinta"; novas fotos (workbook + galeria)
- programação 17h00–21h30 sem bloco de pintura; coffee antes da apresentação
- formulário: card de investimento R$ 947,00/mês, turmas Brasília 27/10 e São Paulo 04/11
- pós-envio: Stripe Buy Button embutido com e-mail e client-reference-id
```

## Pendências
- Subir `LP matriculas.mov` convertido para MP4 (H.264, sem áudio) e apontar a URL do vídeo.
- Título da programação diz "5 horas", mas a grade soma 4h30 (17h00–21h30) — confirmar com o time.
