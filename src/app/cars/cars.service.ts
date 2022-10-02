import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/cars')
  }

  addCars(formValue:{marque: string, modele: string, immatriculation: string, prix: number, etat: string, type: string }){
    return this.http.post<Car>(`http://localhost:3000/cars`, formValue, this.httpOptions)
  }
}
