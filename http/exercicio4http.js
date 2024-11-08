// importa o modulo http
const moduloHttp = require("http");

// criando o servidor com aron function e chamando parametros

const servidor = moduloHttp.createServer((req, res) => {
  // verificar se a requisição for um metodo para puxar ou seja get
  // e o endereco da url for /dados  se a reequeisição chamar a url /dados

  if (req.method === "GET" && req.url === "/dados") {
    // criando um objeto que vai trazer nome, idade e profissçao
    // por algum motivo que ainda não entendi com nome data

    const data = {
      nome: "Beatriz Santana",
      idade: 38,
      profissao: "gerente de projetos",
    };

    // recebendo a porta 200 que fala que sucesso, tudo deu certo
    // definindo as resposta como tipo de dados json

    res.writeHead(200, { "Content-Type": "application/json" });

    // resposta com json mas não entendi esse stringify

    res.end(JSON.stringify(data));
  } else {
    // senão entrar na porta 200 que é sucesso vai entrar no erro 404 que nos avisa que a requisição não foi encontrada

    res.writeHead(404, { "Content-Type": "Text/plain" });

    //mensagem ao usuario ou sistema res.end("pagina não encontrada");
  }
});

// ouvindo a porta 3000

servidor.listen(3000, () => {
  // mensagem ao usuario
  console.log("servidor rolando na porta 3000");
});
