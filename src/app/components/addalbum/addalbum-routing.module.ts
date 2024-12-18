import { NgModule } from '@angular/core';
import { AddalbumComponent } from './addalbum.component';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', component: AddalbumComponent }  // Default route for contact page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddalbumRoutingModule { }
