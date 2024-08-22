# Nome do Projeto

Breve descrição do projeto, explicando o propósito e os principais recursos. Este projeto é uma aplicação de [descrever o que o app faz, por exemplo, "animes da temporada usando a API da Kitsu"].

## Funcionalidades

- Pesquisa por animes
- Filtros por serviços de streaming
- Exibição detalhada de informações de cada anime
- Interface amigável com navegação intuitiva

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento de aplicativos React Native.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipos estáticos.
- **Styled Components**: Biblioteca para estilização dos componentes.
- **Kitsu API**: API utilizada para obter dados dos animes.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/repo.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```
4. Inicie o projeto:
   ```bash
   expo start
   ```

## Compilação

Para compilar o aplicativo para Android:

```bash
eas build -p android --profile preview --local
```

Para iOS:

```bash
eas build -p ios --profile preview --local
```

## Configuração do Ícone do Aplicativo

Para alterar o ícone do aplicativo, substitua o arquivo `icon.png` na pasta `assets` e atualize o caminho no `app.json`:

```json
{
  "expo": {
    "icon": "./assets/icon.png"
  }
}
```

## Screenshots

Aqui estão algumas capturas de tela da aplicação:

<div align="center">
  <img src="https://github.com/yjdutra/animes-finks/blob/master/assets/pic01.jpeg?raw=true" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/yjdutra/animes-finks/blob/master/assets/pic02.jpeg?raw=true" alt="Screenshot 2" width="45%" />
</div>

## Contribuição

1. Fork o projeto.
2. Crie uma nova branch para a sua feature (`git checkout -b feature-nova`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature-nova`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ por [Yuri Jorge](https://github.com/yjdutra)
