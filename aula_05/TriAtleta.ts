import { Pessoa } from './Pessoa';
import { Ciclista } from './Ciclista';
import { Corredor } from './Corredor';
import { Nadador } from './Nadador';

export class TriAtleta extends Pessoa implements Ciclista, Corredor, Nadador {

    public aquecer(): void{
        throw new Error("Method not implemented.");
    }

	public correr(): void {
		// Implementation for correr
        throw new Error("Method not implemented.");
	}

	public nadar(): void {
		// Implementation for nadar
        throw new Error("Method not implemented.");
	}

	public pedalar(): void {
		// Implementation for pedalar
        throw new Error("Method not implemented.");
	}

	public cansar(): void {
		// Implementation for cansar
        throw new Error("Method not implemented.");
	}

	public dormir(): void {
		// Implementation for dormir
        throw new Error("Method not implemented.");
	}
}