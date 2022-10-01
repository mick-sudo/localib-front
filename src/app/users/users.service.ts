import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      tap((response) => console.table(response)), // s'il y a une réponse, on log la réponse
      catchError((error) => {
        console.log(error); // s'il y a une erreur on log l'erreur
        return of([]) // et on renvoit un tableau vide

      })
    )
  }
}
