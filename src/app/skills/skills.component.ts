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
      rating: 85,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 90,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 90,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 100,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
