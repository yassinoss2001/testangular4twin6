import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { AddalbumComponent } from './components/addalbum/addalbum.component';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormsModule } from '@angular/forms';




const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'archives', loadChildren: () => import('./components/archives/archives.module').then(m => m.ArchivesModule) },
  { path: 'albums', loadChildren: () => import('./components/albums/albums.module').then(m => m.AlbumsModule) },
  { path: 'addalbum', loadChildren: () => import('./components/addalbum/addalbum.module').then(m => m.AddalbumModule) },//load it when click on button vue details
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },//load it when click on button vue details

  

];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AlbumsComponent,
    ArchivesComponent,
    AddalbumComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, RouterModule.forRoot(routes),FormValidationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
