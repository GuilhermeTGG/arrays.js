const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaDosAlunos = [10, 7, 9, 6];

// O .includes retorna um booleano "True ou False"
// O indexOF retorna um número, referente ao numero do indice.

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
       let indice = listaDeNotasEAlunos[0].indexOf (nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + `, sua media é: ` + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado."
    }
}

console.log(exibeNomeENota("Juliana"))

