import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MainPageComponent} from "./main-page/main-page.component";
import {HeaderComponent} from "./main-page/header/header.component";
import {FooterComponent} from "./main-page/footer/footer.component";



const BASE_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
];

const CORE_COMPONENTS: any[] = [
  MainPageComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...CORE_COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES
  ],
  exports: [],
})
export class CoreModule { }
