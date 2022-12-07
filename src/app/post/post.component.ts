import {Component} from "@angular/core";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})

export class PostComponent {
  title = 'Employee'
  employee = {
    name: 'Vlad',
    age: 22
  }

  reactLogo = 'Vlad'
  angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'

  constructor() {
    setTimeout(() => {
      console.log('timeout is over')
      this.reactLogo = 'Andrey'
    },1000)
  }
}
