class contaBancaria{
    construtores(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}



class ContaCorrente extends contaBancaria{
    construtor(agencia, numero, cartaocredito){
        super(agencia, numero);
        this tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends contaBancaria {
    construtor(agencia, numero, cartaocredito){
        super(agencia, nimero,);
        this tipo = 'poupanca';  
    }
}

class ContaUniversitaria extends contaBancaria{
    construtor(agencia, numero, cartaocredito){
        super(agencia, nimero);
        this tipo = 'universitaria'; 
    }
    sacar(valor){
        ir (valor > 500){
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;
    }
}