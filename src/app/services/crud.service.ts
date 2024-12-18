import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/album';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  postAlbums(album: Album) {
    return this.http.post('http://localhost:3000/album', album);
  }


  getAlbumsById(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/album/' + id);
  }

  updateAlbum(album:Album) {
    return this.http.put('http://localhost:3000/album/' + album.id, album);
  }



}
