import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesComponent } from './archives.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', component: ArchivesComponent }  // Default route for contact page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivesRoutingModule { }
