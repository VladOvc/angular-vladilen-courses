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

  reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'

  constructor() {
    setTimeout(() => {
      this.reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },500)
  }
}
