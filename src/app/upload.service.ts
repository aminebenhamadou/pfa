import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private Http:HttpClient) { }

  uploadImage(vals:any):Observable<any> {
    let data = vals ;
    return this.Http.post(`https://api.cloudinary.com/v1_1/dtjj1rxjq/image/upload`,data)
  }
}
