# Ciência Delas — Museu Digital interativo (protótipo)

Protótipo de uma página única usando HTML, Tailwind CSS via CDN e JavaScript sem framework. Inclui cartões de personagens, pesquisa, filtros, fichas na mesma página, mapa mental SVG interativo, indicadores de contexto e uma área de teste 3D com senha de demonstração.

## Arquivos

- `index.html` — estrutura da página e componentes.
- `styles.css` — estilos específicos que complementam Tailwind CSS.
- `app.js` — perfis, fontes, mapa mental, abas e comportamento da área beta.
- `models/avatar-demo.glb` — modelo 3D demonstrativo usado como ponto de partida.

## Abrir localmente

É necessário ter Python instalado e conexão à internet para carregar Tailwind CDN e a biblioteca `model-viewer`.

1. Extraia os arquivos na pasta do projeto.
2. Abra essa pasta no VS Code.
3. Abra `Terminal > New Terminal` e rode:

```bash
python -m http.server 8000
```

4. Abra `http://localhost:8000` no navegador.

## Senha beta de demonstração

`beta-ciencia-2026`

A senha é intencionalmente incluída no JavaScript para o protótipo. **Isso não é autenticação segura.** Em GitHub Pages, visitantes podem ver o código-fonte e descobrir a senha. Use apenas para testar o fluxo de interface, sem dados privados. Para beta privado real, implemente autenticação no servidor, por exemplo com Supabase/Firebase ou backend próprio.

A seção Beta 3D permite selecionar um arquivo `.glb` do computador. Ele é carregado localmente no navegador, sem envio para servidor. O botão AR ainda depende de dispositivo e navegador compatíveis e pode exigir HTTPS quando publicado.

## Publicar no GitHub Pages

Se este repositório já é o projeto do site, faça backup da versão anterior. Copie os arquivos `index.html`, `styles.css`, `app.js` e a pasta `models/` para a pasta raiz do repositório, mantendo a estrutura:

```text
seu-repositorio/
├── index.html
├── styles.css
├── app.js
├── README.md
└── models/
    └── avatar-demo.glb
```

Depois:

1. Faça commit e push dos arquivos.
2. No GitHub, abra `Settings > Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Selecione a branch `main` e a pasta `/(root)` e salve.
5. Aguarde a publicação do GitHub Pages e abra a URL apresentada nas configurações.

Como é uma página única, perfis, mapa mental e área beta acontecem dentro de `index.html`; não há navegação para páginas de personagens separadas.

## Conteúdo, imagens e fontes

Os perfis contêm sínteses editoriais e links institucionais conhecidos. Verifique as páginas originais, atualize datas e resultados e obtenha autorização para reutilizar imagens, voz e vídeo. Algumas pessoas não têm retrato embutido e aparecem com iniciais até que a equipe adicione um arquivo autorizado. A imagem direta de uma página externa pode deixar de funcionar ou ter restrições de uso.

A iniciativa Meninas Digitais MT está incluída como projeto, não como pessoa individual. Neiva Guedes é identificada como trajetória regional ligada ao Pantanal/Mato Grosso do Sul; Graziela Barroso e Carmen Portinho nasceram em Corumbá no antigo Mato Grosso, território que hoje pertence a Mato Grosso do Sul.

## Personalizar o acervo

Edite `profiles` no início de `app.js`. Cada perfil tem campos como `name`, `areas`, `summary`, `trajectory`, `contributions`, `sources` e `nodes`. Use URLs confiáveis e não invente depoimentos. Não publique uma frase entre aspas como citação literal sem conferir a fonte e o contexto.

## Observação de tecnologia

Tailwind CSS e `model-viewer` são carregados por CDN, então a primeira execução precisa de internet. O CSS personalizado do projeto está em `styles.css`; o visual do Tailwind é gerado a partir das classes no HTML.
