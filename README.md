# Projeto Google Maps

Esse projeto tem como objetivo o desenvolvimento de uma aplicação web que carrega, agrupa e exibe pontos no mapa do Google Maps.

## Arquitetura

O projeto é composto por:
- Uma aplicação back-end:
	Tem como objetivo disponibilizar os pontos que devem ser exibidos no mapa.
	
	Utiliza as tecnologias:
	- JavaScript
	- Node
	- Express
	- Swagger
	- Docker

- Uma aplicação front-end:
	Tem como objetivo buscar os pontos da aplicação back-end, agrupa-los, e exibi-los no mapa.
	
	Utiliza as tecnologias:
	- JavaScript
	- Node
	- ReactJS
	- HTML
	- CSS3
	- Docker

## Como montar o ambiente

Para montar o projeto em sua maquina é necessário ter instalado:
- [Node](https://nodejs.org/ "node")
- [Docker](https://www.docker.com/ "docker")

### Front-End

Com tudo instalado, abra o terminal do seu sistema operacional, acesse a pasta **Map** dentro da pasta do projeto. e execute o seguinte comando:
```shell
	docker build -d frontend .
```
Após a execução do comando anterior, execute o seguinte comando para subir a aplicação:
```shell
	docker run -p 3000:3000 -d frontend
```

### Back-end

Com tudo instalado, abra o terminal do seu sistema operacional, acesse a pasta **Node-api** dentro da pasta do projeto. e execute o seguinte comando:
```shell
	docker build -d backend .
```
Após a execução do comando anterior, execute o seguinte comando para subir a aplicação:
```shell
	docker run -p 4000:4000 -d backend
```

### Como acessar

Após executar todos os passos anteriores, basta acessar a url [localhost:3000](localhost:3000) no seu navegador.
