import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractComponent } from './abstract/abstract.component';
import { IndexBodyComponent } from './index-body/index-body.component';

const routes: Routes = [

  {path: '', component: IndexBodyComponent},
  {path: 'abstract', component: AbstractComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
