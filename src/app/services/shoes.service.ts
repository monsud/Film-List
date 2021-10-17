import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private _http:HttpClient) { }

  getShoes(){
    return this._http.get('http://localhost:3000/products')
  }

  getShowById(id){
    return this._http.get('http://localhost:3000/'+id)
  }

}
