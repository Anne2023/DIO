function comparaNumeros(n1,n2){
    const saoIguais = n1 === n2;
    const soma = n1 + n2;

    if(saoIguais){ //posso usar ! para não sao iguais e inverter os returns
        return "São Iguais";
    }

    return "Não são iguais";
}