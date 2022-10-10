import { Timestamp } from "rxjs";

export class Post {
    id:string;
    nombre: string;
    apellido: string;
    dni: number;
    fnacimiento: Timestamp<DateConstructor>;
    direccion: string;
    telefono: string;
    email: string;

}
