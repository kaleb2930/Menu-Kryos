# ☰ Menu Kryos

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge" alt="status"/>
  <img src="https://img.shields.io/badge/repositorio-privado-red?style=for-the-badge" alt="privado"/>
  <img src="https://img.shields.io/badge/minecraft-bedrock%20edition-6aa84f?style=for-the-badge" alt="minecraft bedrock"/>
</p>

<p align="center">
  Addon privado para Minecraft Bedrock, mantido por <strong>Kiyoshi</strong>.
</p>

---

## 📌 Sobre

Addon estruturado em **Behavior Pack (BP)** e **Resource Pack (RP)**, com integração e dependências entre os arquivos e pastas de ambos. A lógica e os sistemas são escritos em **JavaScript**; o **JSON** é utilizado para definir e configurar formulários, itens, animações e demais recursos.

O addon centraliza a experiência do jogador em dois menus principais:

- **Menu de Status**: exibe informações e atributos do jogador em tempo real.
- **Menu de Modos Customizados**: permite selecionar e alternar entre modos de jogo personalizados.

## 🛠️ Tecnologias

<p align="left">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
</p>
<p align="left">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078D7?style=for-the-badge&logo=visualstudiocode&logoColor=white" />
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" />
</p>

> 💡 Extensão utilizada no VS Code: **Blockception's Minecraft Bedrock Development**, com autocomplete e validação de schemas JSON para BP/RP.

## 🗂️ Estrutura

```text
Menu Kryos/
├── BP/                    # Behavior Pack — lógica e comportamento
│   ├── scripts/           # Sistemas em JavaScript
│   │   ├── menus/         # Lógica do menu de status e do menu de modos
│   │   └── modes/         # Lógica dos modos customizados
│   ├── entities/
│   ├── loot_tables/
│   ├── recipes/
│   └── manifest.json
│
├── RP/                    # Resource Pack — visual e áudio
│   ├── ui/                # Definições das telas dos menus (forms/UI)
│   ├── textures/
│   ├── animations/
│   ├── sounds/
│   └── manifest.json
│
└── README.md
```

> ⚠️ BP e RP são interligados por UUIDs, manifests e caminhos referenciados entre os arquivos. Renomear ou mover arquivos e pastas sem ajustar as referências pode quebrar o addon.

## ⚙️ Rodando localmente

```bash
git clone https://github.com/kaleb2930/Menu-Kryos
```

Abra a pasta no VS Code e vincule (symlink) ou copie `BP/` e `RP/` para as pastas `development_behavior_packs` e `development_resource_packs` do Minecraft Bedrock.

## 🔒 Confidencialidade

Repositório privado; código e assets são de uso interno. Não distribuir ou publicar externamente sem autorização de **Kiyoshi**. Nunca commitar tokens, senhas ou credenciais.

---

<p align="center">
  Feito com ☰ Menu Kryos
</p>
