function comparaNumeros(n1,n2){
    const primeiraFrase = criaPrimeiraFrase(n1,n2);
    const segundaFrase  = criasSegundaFrase(n1,n2);

    return `${primeiraFrase} ${segundaFrase}`

}

function criaPrimeiraFrase(n1, n2){
    let saoIguais = '';

    if(n1 !== n2){
        saoIguais = 'não';

    }
    return`Os números ${n1} e ${n2} ${saoIguais} são iguais`
}

function criaSegundaFrase(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado01 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que é 10 e ${resultado20} que é 20`
}






    /*const saoIguais = n1 === n2;
    const soma = n1 + n2;
    /*if(saoIguais){ //posso usar ! para não sao iguais e inverter os returns
        return "São Iguais";
    }

    return "Não são iguais";
}