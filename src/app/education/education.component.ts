import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'The Degree of Bachelor Information Technology',
      course: 'HUFLIT',
      duration: '2018-2022',
      score: '80%',
    },
    {
      institute: 'The Degree of Bachelor Information Technology',
      course: 'HUFLIT',
      duration: '2018-2022',
      score: '80%',
    },
    {
      institute: 'The Degree of Bachelor Information Technology',
      course: 'HUFLIT',
      duration: '2018-2022',
      score: '80%',
    },
    {
      institute: 'The Degree of Bachelor Information Technology',
      course: 'HUFLIT',
      duration: '2018-2022',
      score: '80%',
    },
    {
      institute: 'The Degree of Bachelor Information Technology',
      course: 'HUFLIT',
      duration: '2018-2022',
      score: '80%',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
