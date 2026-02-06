// Declaração de interface :
import {Atleta} from "./Atleta";
 
export interface Ciclista extends Atleta{
    pedalar():void;
    // nao precisa do public pedalar ...
}