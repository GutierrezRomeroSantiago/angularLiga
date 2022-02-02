import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Jugador } from "./models/Jugador";

@Injectable({ providedIn: "root" })
export class EquipoService {
  //private url2 = "https://api-liga20-21.herokuapp.com/";
  private url = "https://ligaapi.herokuapp.com"
  constructor(private http: HttpClient) {}
  getEquiposApi() {
    const url = `${this.url}/equipos`;
    return this.http.get(url);
  }

  addEquipo(doc: any) {
    const url = `${this.url}/equipo`;
    return this.http.post(url, doc);
  }

  getEquipo(id: string) {
    const url = `${this.url}/equipo/${id}`;
    return this.http.get(url);
  }

  addJugador(doc: any) {
    const url = `${this.url}/jugador`;
    return this.http.post(url, doc);
  }

  updateEquipo(doc: any) {
    const url = `${this.url}/equipo/${doc.id}`;
    return this.http.put(url, doc);
  }

  deleteJugador(jugador: Jugador) {
    const url = `${this.url}/deletejugador/${jugador.dorsal}/${jugador.equipo}`;
    return this.http.delete(url);
  }

  getJugador(dorsal: string, equipo: string) {
    const url = `${this.url}/jugador/${dorsal}/${equipo}`;
    return this.http.get(url);
  }

  updateJugador(jugador: Jugador) {

    // Preparamos en body
    const doc = {
      nombre: jugador.nombre,
      partidosJugados: jugador.partidosJugados,
      minutosJugados: jugador.minutosJugados,
      golesEncajados: jugador.golesEncajados,
      goles: jugador.goles,
      asistencias: jugador.asistencias,
      tarjetasAmarillas: jugador.tarjetasAmarillas,
      tarjetasRojas: jugador.tarjetasRojas
    };

    const url = `${this.url}/jugador/${jugador.dorsal}/${jugador.equipo}`;
    return this.http.put(url, doc);
  }
}
