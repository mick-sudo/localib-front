import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.log(error);
        return of([])
      })
    )
  }

  addUsers(formValue: { prenom: string, nom: string, email: string, telephone: string, date_naissance: Date }): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/users`, formValue, this.httpOptions)
  }

}
