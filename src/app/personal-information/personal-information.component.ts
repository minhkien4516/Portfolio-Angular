import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Mai Trung Minh Kiên'],
    ['DOB', '04/05/2000'],
    ['Work Exp', '02 years'],
    ['Education', 'The Degree of Bachelor Information Technology'],
    ['Interests', 'Soccer, Badminton, Bicycle, Swimming'],
  ];

  aboutMe: string[] = [
    'Currently, I am a Backend Developer with 2 years of experience in Web Development',
    'With my knowledge of the related technologies on the Backend side, I enjoy solving API problems and applying clean code principles like SOLID for projects, and best practices to become a better software engineer.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
