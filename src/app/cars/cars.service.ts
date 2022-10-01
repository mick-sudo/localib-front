import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/cars').pipe(
      tap((response: any) => console.table(response)), // s'il y a une réponse, on log la réponse
      catchError((error) => {
        console.log(error); // s'il y a une erreur on log l'erreur
        return of([]) // et on renvoit un tableau vide

      })
    )
  }
}
