import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';  
import { Album } from 'src/app/models/album'; 

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {

  album: Album = { 
    id: 0, 
    title: '', 
   creationDate: '', 
    archived: 0, 
    coverPicture: ''
  }; 
  albums: Album[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getAlbums(); 
  }

  getAlbums(): void {
    this.crudService.getAlbums().subscribe(
      (data: Album[]) => {
        this.albums = data; 
      },
      (error) => {
        console.error('Error fetching album', error);
      }
    );
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.addAlbum(); 
    }
  }

  addAlbum(): void {
    this.crudService.postAlbums(this.album).subscribe(
      (data) => {
        console.log('album added successfully:', data);
        this.getAlbums(); 
        this.album = {
          id: 0, 
          title: '', 
         creationDate: '', 
          archived: 0, 
          coverPicture: '', 
        };
      },
      (error) => {
        console.error('Error adding album', error);
      }
    );
  }

}
