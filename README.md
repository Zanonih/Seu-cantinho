# Para Você 💌

Site-presente com álbum de fotos, bichinhos, música e sorteadores de filme/receita.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser privado ou público).
2. Suba todos os arquivos desta pasta para o repositório (pelo site do GitHub em
   "Add file → Upload files", ou por linha de comando com `git`).
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment", escolha **Deploy from a branch**, branch `main`, pasta `/root`.
5. Salve e aguarde 1-2 minutos. O link do site aparece no topo dessa mesma página
   (algo como `https://seu-usuario.github.io/nome-do-repositorio/`).

## Como personalizar

- **Fotos do álbum**: coloque os arquivos em `img/album/` e liste cada um em
  `js/album-data.js`.
- **Fotos dos bichinhos**: mesma ideia, na pasta `img/pets/` e no arquivo
  `js/pets-data.js`.
- **Músicas**: edite a lista `MUSICAS` em `js/script.js`. Se quiser incorporar uma
  playlist de verdade do Spotify, há instruções em comentário dentro de `musica.html`.
- **Filmes e receitas**: edite as listas `FILMES` e `RECEITAS` em `js/script.js`.
- **Cores e fontes**: tudo fica em `css/style.css`, no bloco `:root` no topo do arquivo.

Bom presente! 🌸
