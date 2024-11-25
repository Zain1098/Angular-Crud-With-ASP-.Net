import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNetService {

  constructor(private api:HttpClient) { }
url="https://localhost:7061/Home"

  add(body:any){
    return this.api.post(`${this.url}/Adduser`,body)
  }
  fetch(){
    return this.api.get(`${this.url}/Fetchuser`)
  }

  update(data:any){
    return this.api.put(`${this.url}/update`,data)
  }
}
