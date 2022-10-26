import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TipoPersonaComponent} from "./tipo-persona.component";

const routes: Routes = [
  {
    path: '',
    component: TipoPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPersonaRoutingModule {
}
