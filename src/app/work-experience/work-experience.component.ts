import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExperienceList: WorkExperience[] = [
    {
      role: 'Software Developer',
      company: 'DXC',
      duration: 'November 2021 - March 2024',
      description: [
        'Worked with multiple teams to develop web application and functional majority in Insurance Software',
        'Worked with the new technology such as (Spring boot JAVA Framework, Angular, MongoDB, Cache)',
      ],
    },
    {
      role: 'Software Developer',
      company: 'DXC',
      duration: 'November 2021 - March 2024',
      description: [
        'Worked with multiple teams to develop web application and functional majority in Insurance Software',
        'Worked with the new technology such as (Spring boot JAVA Framework, Angular, MongoDB, Cache)',
      ],
    },
    {
      role: 'Software Developer',
      company: 'DXC',
      duration: 'November 2021 - March 2024',
      description: [
        'Worked with multiple teams to develop web application and functional majority in Insurance Software',
        'Worked with the new technology such as (Spring boot JAVA Framework, Angular, MongoDB, Cache)',
      ],
    },
    {
      role: 'Software Developer',
      company: 'DXC',
      duration: 'November 2021 - March 2024',
      description: [
        'Worked with multiple teams to develop web application and functional majority in Insurance Software',
        'Worked with the new technology such as (Spring boot JAVA Framework, Angular, MongoDB, Cache)',
      ],
    },
    {
      role: 'Software Developer',
      company: 'DXC',
      duration: 'November 2021 - March 2024',
      description: [
        'Worked with multiple teams to develop web application and functional majority in Insurance Software',
        'Worked with the new technology such as (Spring boot JAVA Framework, Angular, MongoDB, Cache)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
