// Aprendendo a criar um servidor HTTP com Node.js

// Importa o módulo HTTP
const moduloHttp = require("http");

// Cria o servidor com uma função de callback usando arrow function
const servidor = moduloHttp.createServer((req, res) => {
  // Verifica se a requisição é do tipo POST e a URL é "/alunos"
  if (req.method === "POST" && req.url === "/alunos") {
    // Cria um objeto contendo nome, idade e profissão
    const dados = {
      nome: "Beatriz Santana",
      idade: 38,
      profissao: "gerente de projetos",
    };

    // Retorna um status 200 para indicar sucesso
    // Define o tipo da resposta como JSON
    res.writeHead(200, { "Content-Type": "application/json" });

    // Converte o objeto 'dados' para uma string JSON e envia como resposta
    res.end(JSON.stringify(dados));
  } else {
    // Se a URL ou método não corresponderem, retorna um erro 404 (não encontrado)
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página não encontrada");
  }
});

// Servidor escuta a porta 3000
servidor.listen(3000, () => {
  // Mensagem ao usuário no console
  console.log("Servidor rodando na porta 3000");
});

// Revisão dos códigos de status HTTP
// 200 -> Sucesso
// 300 -> Redirecionamento
// 400 -> Erro do cliente (navegador)
// 500 -> Erro interno do servidor

// O código de status HTTP é o feedback da requisição enviada pelo frontend.

// O que é JSON e para que ele serve?
// JSON (JavaScript Object Notation) é um formato de texto leve para troca de dados,
// usado para representar objetos em um formato de texto que é fácil de ler e escrever.

// O que faz o JSON.stringify()?
// O método JSON.stringify() converte um objeto JavaScript em uma string JSON,
// permitindo que o objeto seja enviado ou armazenado em texto.

// O que faz o JSON.parse()?
// O método JSON.parse() converte uma string JSON de volta em um objeto JavaScript,
// permitindo que a string JSON seja manipulada como um objeto.
