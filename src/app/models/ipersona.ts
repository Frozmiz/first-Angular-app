import { IMonstro } from './imonstro';

export interface IPersona {

    nombre: string;
    edad: number;
    alive: boolean;
    domino?: "Angular" | "JavasCript" | "TypesCript" | "Angular";
    gafas?: boolean; //El "?" hace que sea un objero no obligatorio (no tipado)
    monstros?: IMonstro[];

}