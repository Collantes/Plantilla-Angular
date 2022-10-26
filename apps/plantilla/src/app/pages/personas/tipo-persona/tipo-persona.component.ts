import { Component, OnInit } from '@angular/core';
import {TipoPersonaService} from "../../../providers/services/tipo-persona.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tipo-persona',
  templateUrl: './tipo-persona.component.html',
  styleUrls: ['./tipo-persona.component.css']
})
export class TipoPersonaComponent implements OnInit {

  departaments: any[] = [];
  constructor(private departamentService: TipoPersonaService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getDepartaments();
  }

  getDepartaments(): void {
    this.departamentService.getAll$().subscribe(response => {
      this.departaments = response.data || [];
    });
  }
}
