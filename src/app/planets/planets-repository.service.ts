import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetsRepositoryService {
  private apiUri: string = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {}

  getPlanets() {
    return this.http.get(this.apiUri);
  }
}
