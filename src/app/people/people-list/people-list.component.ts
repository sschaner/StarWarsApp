import { Component, OnInit } from '@angular/core';
import { PeopleRepositoryService } from '../people-repository.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any;

  constructor(private repo: PeopleRepositoryService) { }

  ngOnInit(): void {
    this.repo.getPeople().subscribe((response) => {
      this.people = response;
    })
  }

}
