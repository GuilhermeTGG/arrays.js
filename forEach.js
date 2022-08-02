const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


   //CALLBACK (é uma função que chama de volta uma outra função)
//notas.forEach ( nota => {
//    somaDasNotas += nota
//})

// Outra forma seria sem o Arrow Function, usando function.

notas.forEach(function(nota){
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length;

console.log(media);
