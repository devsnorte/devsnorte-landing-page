Mudanças propostas para organização até o momento:

# Padrão de componentização

Para não ter tanta alteração na estrutura atual, mantive os componentes nas pastas que estavam, usando a ideia de um componente com componentes menores internos, apenas padronizei o nome dos arquivos

- Pages: seguem padrão `kebab-case`
- Arquivos de Componentes:
  - Nomenclatura: `PascalCase`
  - Padrão de exportação: `Named Export`
  - Padrão de criação: `Regular Functions`

## Motivações

Componentes com `PascalCase` serão automaticamente entendidos ao serem visto como componentes e não páginas, evitando a necessidade de `.pages` e `.component` na nomenclatura

Componentes estavam sendo exportados com `default export` e sendo importados usando o mesmo nome, como não existia necessidade de um export default, optei por manter o padrão de `named export`, outro motivo também foi por deixar a possibilidade de ao necessitar exportar mais elementos de um arquivo, existe uma melhor organização

# Padrão de estrutura de pastas

Fiz alterações quanto a organização, criei uma pasta `contexts` e removi de dentro de `components` a pasta `ContextApi`,

- Folders estão todos em lowercase
- Criados folders para separar os types relacionados a componentes e hooks
- Criado pasta para constantes

# Padrão para criação de arquivos de estilização

Criei pastas chamadas `styles` dentro de cada pasta de componente, a criação dos arquivos de estilo variaram de acordo com a quantidade de tailwind que estava nos componentes, caso tivesse começado a ocupar mais de 1 linha, criei um arquivo para o css,
o padrão para criação do nome foi de `ComponentName.module.css` utlizando css modules

# Padrão de Arquivos não relacionados ao React

Todos os arquivos não relacionados ao React, como types e arquivos de constantes estão usando `camelCase`.
Os arquivos de Types usam `Type` ao fim do arquivo

# Eslint

Regras escolhidas:

- [react/recommended](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs)
  - Todos as regras recomendadas do plugin do react para eslint estão habilitadas, pode checar no link
- [eslint:recommended](https://eslint.org/docs/latest/rules/)
  - Todos as regras recomendadas do eslint estão habilitadas, pode checar no link
- [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)
  - Foi adicionado um pattern para caso uma variável PRECISE ser colocada mas não será usada, ao colocar `_` na frente, o eslint irá parar de reclamar
- [no-var](https://eslint.org/docs/latest/rules/no-var)
- [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
- [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
- [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
- [not-empty](https://eslint.org/docs/latest/rules/no-empty)
- [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
- [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
- [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
- [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
- [brace-style](https://eslint.org/docs/latest/rules/brace-styles)
- [max-len](https://eslint.org/docs/latest/rules/max-len)
- [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
- [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
- [quotes](https://eslint.org/docs/latest/rules/quotes)
  - Escolhido usar aspas simples no projeto, para que aspas duplas possam ser usadas para comentários
- [react/destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)
- [react/jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md)
- [react/jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)
- [react/self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- [react/jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)
- [react/button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
- [react/jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)
- [react/jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)
- [react/jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md)
