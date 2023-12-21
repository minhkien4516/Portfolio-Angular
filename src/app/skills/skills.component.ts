import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 5,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 5,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 5,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 5,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 5,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
