import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  arr = [1, 1, 3, 5, 8, 13]
  objs = [
    {
      title: 'Post1',
      author: 'Vlad',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quo?',
      comments:[
        {name: 'gudgufi', message: 'Нуууу допустим'}
      ]
    },
    {
      title: 'Post2',
      author: 'Vlad',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quo?',
      comments:[
        {name: 'gudgufi', message: 'Нуууу допустим'},
        {name: 'gudgufi', message: 'говной воняет'}
      ]
    },
    {
      title: 'Post3',
      author: 'Vlad',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quo?',
      comments:[
        {name: 'gudgufi', message: 'Нуууу допустим'},
        {name: 'gudgufi', message: 'Не хрнеь полная'}

      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
