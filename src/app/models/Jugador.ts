export class Jugador {
  private _dorsal: number;
  private _nombre: string;
  private _equipo: string;
  private _partidosJugados: number;
  private _minutosJugados: number;
  private _golesEncajados: number;
  private _goles: number;
  private _asistencias: number;
  private _tarjetasAmarillas: number;
  private _tarjetasRojas: number;

  public constructor(
    dorsal: number,
    nombre: string,
    equipo: string,
    partidosJugados: number,
    minutosJugados: number,
    golesEncajados: number,
    goles: number,
    asistencias: number,
    tarjetasAmarillas: number,
    tarjetasRojas: number
  ) {
    (this._dorsal = dorsal),
      (this._nombre = nombre),
      (this._equipo = equipo),
      (this._partidosJugados = partidosJugados),
      (this._minutosJugados = minutosJugados),
      (this._golesEncajados = golesEncajados),
      (this._goles = goles),
      (this._asistencias = asistencias),
      (this._tarjetasAmarillas = tarjetasAmarillas),
      (this._tarjetasRojas = tarjetasRojas);
  }
  set dorsal(dorsal: number){
    this._dorsal = dorsal
  }
  get dorsal() {
    return this._dorsal;
  }
  set nombre(nombre: string){
    this._nombre = nombre
  }
  get nombre() {
    return this._nombre;
  }
  set equipo(equipo: string){
    this._equipo = equipo
  }
  get equipo() {
    return this._equipo;
  }
  set partidosJugados(pJugados: number){
    this._partidosJugados = pJugados
  }
  get partidosJugados() {
    return this._partidosJugados;
  }
  set minutosJugados(mJugados: number){
    this._minutosJugados = mJugados
  }
  get minutosJugados() {
    return this._minutosJugados;
  }
  set golesEncajados(encajados: number){
    this._golesEncajados = encajados
  }
  get golesEncajados() {
    return this._golesEncajados;
  }
  set goles(goles: number){
    this._goles = goles
  }
  get goles() {
    return this._goles;
  }
  set asistencias(asistencias: number){
    this._asistencias = asistencias
  }
  get asistencias() {
    return this._asistencias;
  }
  set tarjetasAmarillas(amarillas: number){
    this._tarjetasAmarillas = amarillas
  }
  get tarjetasAmarillas() {
    return this._tarjetasAmarillas;
  }
  set tarjetasRojas(rojas: number){
    this._tarjetasRojas = rojas
  }
  get tarjetasRojas() {
    return this._tarjetasRojas;
  }
}
