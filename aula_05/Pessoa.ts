export abstract class Pessoa{

    private _nome: string;

    constructor(nome:string){
        this._nome = nome;

    }

    public get Nome(): string{
        return this._nome;
    }

    public set Nome(nome: string){
        this._nome = nome;

    }

    // Metodo abstrato
    public abstract cansar(): void;
    public abstract dormir(): void;

    public visualizar(): void{
        console.log("Nome: ", this._nome);
    }
}

// passar p typescript pasta aula 05