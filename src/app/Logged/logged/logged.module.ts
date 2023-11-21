import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@NgModule({
  declarations: [
    // Declaraciones de tus componentes aquí si los tienes
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponent,
    LoggedpModule
    // Otros módulos necesarios para tu módulo loggedp
  ],
  exports: [
    // Puedes exportar componentes si es necesario
  ]
})

export class LoggedpModule { }