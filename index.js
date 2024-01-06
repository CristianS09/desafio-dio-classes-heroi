// classe herói com as características.
class hero{
   constructor(nome,idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}
// Função com Estruturas de decisões que retorna o tipo do herói e o ataque.
    tipoHeroi(ataque){
        switch(true){
            case(this.tipo === "Mago"):
                ataque = "magia";
                break;

            case(this.tipo === "Guerreiro"):
                ataque = "usou espada";
                break;

            case(this.tipo === "Monge"):
                ataque = "usou artes marciais"
                break;

            case(this.tipo === "Ninja"):
                ataque = "usou shuriken"
                break;

            default:
                this.tipo = "Tipo de herói é inválido."
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}.`)
    }
}
// Recebe os dados da classe.
receberDados = new hero("Carlos",19,"Mago");
// Imprime os resultados do tipo do herói e o atawue.
receberDados.tipoHeroi();




