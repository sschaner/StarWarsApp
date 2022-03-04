import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryService {
  private apiUri: string = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(this.apiUri);
  }
}
