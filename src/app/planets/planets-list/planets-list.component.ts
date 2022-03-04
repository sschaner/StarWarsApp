import { Component, OnInit } from '@angular/core';
import { PlanetsRepositoryService } from '../planets-repository.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css'],
})
export class PlanetsListComponent implements OnInit {
  planets: any;

  constructor(private repo: PlanetsRepositoryService) {}

  ngOnInit(): void {
    this.repo.getPlanets().subscribe((response) => {
      this.planets = response;
    });
  }
}
