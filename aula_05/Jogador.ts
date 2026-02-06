import { Pessoa } from "./Pessoa";
import { Corredor } from "./Corredor";

export class Jogador extends Pessoa implements Corredor{

    // poo tbm envolve segregação de classes

    constructor(nome: string){
        super(nome);
    }
    public aquecer(): void{
        throw new Error("Method not implemented.")
    }

   public correr(): void {
        throw new Error("Method not implemented.");
    }

    public cansar(): void{
        console.log("O Jogador Cansou após 90 minutos de jogo!");
    }

    public dormir(): void {
        console.log("O Jogador Dormiu!")
    }
}

// interface chamada de classe abstrata pura