import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonasComponent} from "./personas.component";

const routes: Routes = [
  {
    path: '',
    component: PersonasComponent,
    children: [
      {
        path: 'persona',
        loadChildren: () => import('src/app/pages/personas/persona/persona.module')
          .then(m => m.PersonaModule),
      },
      {
        path: 'tipo-persona',
        loadChildren: () => import('src/app/pages/personas/tipo-persona/tipo-persona.module')
          .then(m => m.TipoPersonaModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule {
}
