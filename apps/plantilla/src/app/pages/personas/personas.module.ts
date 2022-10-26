import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { PersonaComponent } from './persona/persona.component';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import {PersonasRoutingModule} from "./personas-routing.module";


@NgModule({
  declarations: [
    PersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
  ]
})
export class PersonasModule { }
