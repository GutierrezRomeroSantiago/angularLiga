import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Location } from "@angular/common";

@Component({
  selector: "app-jugador",
  templateUrl: "./jugador.component.html",
  styleUrls: ["./jugador.component.css"]
})
export class JugadorComponent implements OnInit {
  jugador: Jugador;
  jugadorApi = null;

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private location: Location
  ) {}

  getJugador(): void {
    let dorsal = this.route.snapshot.paramMap.get("dorsal")
    let equipo = this.route.snapshot.paramMap.get("equipo")
    // Crear un indice único con estos campos y estudiar la gestión de excepciones
    this.equipoService.getJugador(dorsal, equipo).subscribe(e => {
      this.jugadorApi = e;
      this.jugador = new Jugador(
        this.jugadorApi.dorsal,
        this.jugadorApi.nombre,
        this.jugadorApi.equipo,
        this.jugadorApi.partidosJugados,
        this.jugadorApi.minutosJugados,
        this.jugadorApi.golesEncajados,
        this.jugadorApi.goles,
        this.jugadorApi.asistencias,
        this.jugadorApi.tarjetasAmarillas,
        this.jugadorApi.tarjetasRojas
      );
    });
  }

  update(): void {
    if ( this.jugador.partidosJugados < 0 ) {  // Una forma de depurar
      return;
    }
    const doc = {
      dorsal: this.jugador.dorsal,  // Después se usará como parámetro
      nombre: this.jugador.nombre,
      equipo: this.jugador.equipo,  // Después se usará como parámetro
      partidosJugados: this.jugador.partidosJugados,
      minutosJugados: this.jugador.minutosJugados,
      golesEncajados: this.jugador.golesEncajados,
      goles: this.jugador.goles,
      asistencias: this.jugador.asistencias,
      tarjetasAmarillas: this.jugador.tarjetasAmarillas,
      tarjetasRojas: this.jugador.tarjetasRojas
    };
    this.equipoService.updateJugador(this.jugador).subscribe((e) => {
                          console.log(e)
                          this.goBack()});
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getJugador();
  }
}
