import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoPersonaComponent } from './tipo-persona.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TipoPersonaRoutingModule} from "./tipo-persona-routing.module";
import {TipoPersonaService} from "../../../providers/services/tipo-persona.service";



@NgModule({
  declarations: [
    TipoPersonaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TipoPersonaRoutingModule
  ],
  providers: [TipoPersonaService],
})
export class TipoPersonaModule { }
