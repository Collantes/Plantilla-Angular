import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PersonaRoutingModule} from "./persona-routing.module";



@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonaRoutingModule
  ],
})
export class PersonaModule { }
