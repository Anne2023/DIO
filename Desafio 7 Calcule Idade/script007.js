function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Amábile",
    idade: 33,
};

const pessoa2 = {
    nome: "Rogério",
    idade: 37,
};

const pessoa3 ={
    nome: "Pietro",
    idade: 8,
};

const animal = {
    nome: 'Ayla',
    idade: 1,
    raca: 'Lhasa'
};

console.log(calculaIdade.call(pessoa3, 30));
