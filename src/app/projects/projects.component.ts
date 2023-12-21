import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technology:
        'Cloud Computing, Angular, Angular Material, Spring boot, Mongodb, Redis',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud',
        'Build the services of Google Map that can be used by third party app to get data.',
        'was part of team to expand the google drive.',
      ],
    },
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technology:
        'Cloud Computing, Angular, Angular Material, Spring boot, Mongodb, Redis',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud',
        'Build the services of Google Map that can be used by third party app to get data.',
        'was part of team to expand the google drive.',
      ],
    },
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technology:
        'Cloud Computing, Angular, Angular Material, Spring boot, Mongodb, Redis',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud',
        'Build the services of Google Map that can be used by third party app to get data.',
        'was part of team to expand the google drive.',
      ],
    },
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technology:
        'Cloud Computing, Angular, Angular Material, Spring boot, Mongodb, Redis',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud',
        'Build the services of Google Map that can be used by third party app to get data.',
        'was part of team to expand the google drive.',
      ],
    },
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technology:
        'Cloud Computing, Angular, Angular Material, Spring boot, Mongodb, Redis',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud',
        'Build the services of Google Map that can be used by third party app to get data.',
        'was part of team to expand the google drive.',
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
