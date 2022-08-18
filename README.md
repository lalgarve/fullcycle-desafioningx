# Desafio Ningx FullCycle

## Repositório do Desafio Ningx do FullCycle

1. Para desenvolvimento e realizar o build das imagens é necessário realizar a instalação dos pacotes do Node. Como é usual, os pacotes do node não são incluídos no repositório.
2. O arquivo build-prod.sh realiza o build das imagens de produção. Considera que estejam disponíveis os pacotes do node na pasta da aplicação.
3. As imagens de produção foram subidas para o DockerHub
4. A aplicação node verifica se há problema com conexão com o banco de dados e dá uma mensagem de erro para o usuário. 
5. Quando _localhost:8080_ é chamado o nome Leila é incluído no banco de dados
6. Quando _localhost:8080/<nome>_ é chamado o nome da especificado é incluído