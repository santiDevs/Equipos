let equiposDeFutbol:object = []

type tipoDeporte = 'futbol' | 'basket' | 'baisbol'
type colores = 'blanco' | 'rojo' | 'verde' | 'negro' | 'azul' | 'naranja'
type posicionJugador = 'GK' | 'DFC' | 'DFL' | 'DFR' | 'MCD' | 'MCO' | 'MC' | 'ST' | 'DC' | 'RF' | 'LF'

interface IJugador{
    id: number,
    nombre: string,
    edad: number,
    posicion: posicionJugador 
}

interface IEquipo{
    id: number,
    nombre: string,
    deporte: tipoDeporte,
    ciudad: string,
    colores: colores,
    estadio: object,
    jugadores: object 
}

interface IEstadio{
    id: number,
    nombre: string,
    capacidad: number
}

class Jugador implements IJugador{
    id: number;
    nombre: string;
    edad: number;
    posicion: posicionJugador;

    constructor({id, nombre, edad, posicion}:IJugador){
       this.id = id;
       this.nombre = nombre;
       this.edad = edad;
       this.posicion = posicion;
    }
}



let jugador1 = new Jugador({id: 45, edad:20, nombre: "Sebastian", posicion:"ST"})
let jugador2 = new Jugador({id: 53, edad:20, nombre: "Cristiano", posicion:"DFC"})
let jugador3 = new Jugador({id: 44, edad:20, nombre: "Messi", posicion:"DC"})
let jugador4 = new Jugador({id: 70, edad:20, nombre: "Halan", posicion:"ST"})

let jugadoresMadrid:object = [
    jugador1,
    jugador2,
    jugador3, 
    jugador4
]

class Equipo implements IEquipo{
    id: number;
    nombre: string;
    deporte: tipoDeporte;
    ciudad: string;
    colores: colores; 
    estadio: object;
    jugadores: object;

    constructor({id, nombre, deporte, ciudad, colores, estadio, jugadores}:IEquipo){
        this.id = id;
        this.nombre = nombre;
        this.deporte = deporte;
        this.ciudad = ciudad;
        this.colores = colores;
        this.estadio = estadio;
        this.jugadores = jugadores;
    }
}

class Estadio implements IEstadio {
    id: number;
    nombre: string;
    capacidad: number;

    constructor({id, nombre, capacidad}:IEstadio){
        this.id = id;
        this.nombre = nombre;
        this.capacidad = capacidad;
    }
}

let estadioMadrid = new Estadio({id: 34, nombre: "Santiago Bernabú", capacidad: 50.000})

let realMadrid = new Equipo({id: 14, nombre: "Real Madrid", deporte: "futbol", ciudad: "Madrid", colores:"blanco", jugadores: jugadoresMadrid, estadio: estadioMadrid})         
let barsa = new Equipo({id: 60, nombre: "Barsa", deporte: "futbol", ciudad: "Barcelona", colores:"blanco", jugadores: jugadoresMadrid, estadio: estadioMadrid})         
let borussia= new Equipo({id: 40, nombre: "Borussia", deporte: "futbol", ciudad: "Borussia", colores:"blanco", jugadores: jugadoresMadrid, estadio: estadioMadrid})         
let alemania = new Equipo({id: 40, nombre: "Alemania", deporte: "futbol", ciudad: "Alemania", colores:"blanco", jugadores: jugadoresMadrid, estadio: estadioMadrid})

let equipos = [
    realMadrid,
    barsa,
    borussia,
    alemania
]

function filter<T>(equipos: T[], propiedad: keyof T, valor: T[keyof T]): T[]{
    return equipos.filter((vehicle)=> vehicle[propiedad] === valor);
}

console.log(filter<Equipo>(equipos, "ciudad", "Madrid"));
