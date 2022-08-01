const listaDeChamada = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// A Ana e o Caio se mudaram e o Rodrigo entrou no lugar.

//listaDeChamada.splice(1, 2 ,"Rodrigo");

listaDeChamada.splice(2, 0, "Rodrigo"); //O 0 pode ser passsado como parametro, assim ninguém sera removido

console.log(`A lista de chamada: ${listaDeChamada}`);

